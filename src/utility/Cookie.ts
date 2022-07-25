// cookie 삭제 함수
export const deleteCookie = (name: any, path: any, domain: any) => {
    if (get_cookie(name)) {
        document.cookie = name + "=" + (path ? ";path=" + path : "") + (domain ? ";domain=" + domain : "") + ";expires=Thu, 01 Jan 1970 00:00:01 GMT";
    }
};
// cookie 찾기 함수
export const get_cookie = (name: any) => {
    return document.cookie.split(";").some(c => {
        return c.trim().startsWith(name + "=");
    });
};
