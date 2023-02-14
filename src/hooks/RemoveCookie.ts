import Cookies from "js-cookie";


const RemoveCookie = (cookiename: string) => {
    Cookies.remove(cookiename);
}
export default  RemoveCookie;