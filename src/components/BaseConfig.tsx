import React, {useEffect} from 'react';
import {configAPI} from "../services/ConfigService";
import axios from "axios";
import getCookie from "../hooks/GetCookie";

const BaseConfig = () => {
    const {data: config, error, isLoading} = configAPI.useGetConfigQuery(null)
    console.log(config)
    useEffect(() => {
        axios.get("/api/config/").then(x => console.log(x));
        const csrf_cookie = getCookie("csrftoken");
        axios.post("/api/auth/login/", {username: 'unknown'}, {headers: {'X-CSRFToken': csrf_cookie}});
    }, [])
    return (
        <div>
            <h1>Параметры конфигурации</h1>
            <p>Параметры конфигурации могут быть использованы в качестве параметров в конфигурации приложения.</p>
            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>Произошла ошибка при загрузке</h1>}
            {config && <p>Параметры конфигурации: {JSON.stringify(config)}</p>}
        </div>
    );
};

export default BaseConfig;