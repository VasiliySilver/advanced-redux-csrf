import Cookies from "js-cookie";


const GetCookie: any = (cookiename: string) => {
    return Cookies.get(cookiename);
}
export default  GetCookie;