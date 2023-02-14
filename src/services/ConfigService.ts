import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IConfig} from "../models/IConfig";
import setCookie from "../hooks/setCookie";

const responseHandler: any = ({response}: { response: any }) => {
    console.log(response)
    return response.json();
}

export const configAPI = createApi({
    reducerPath: 'configAPI',
    tagTypes: ['Config'],
    baseQuery: fetchBaseQuery(
        {
            baseUrl: '',
            credentials: "include",
            mode: "no-cors"
        }),
    endpoints: (build) => ({
        getConfig: build.query<IConfig, any>({
            query: () => ({
                url: '/config/',
                method: 'GET',
                responseHandler: (response) => response.json()
            }),
            providesTags: result => ['Config']
        }),
    }),
});