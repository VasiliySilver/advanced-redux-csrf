import Cookies from "js-cookie";


const SetCookie = (cookiename: string, usrin: string) => {
    Cookies.set(cookiename, usrin, {
        expires: 1, // day
        secure: true,
        sameSite: 'strict',
        path: '/'
    })
}

export default  SetCookie;