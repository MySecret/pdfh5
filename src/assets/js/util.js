import axios from 'axios';
import Cookies from 'js-cookie';

let util = {};
util.title = function (title = '') {
    window.document.title = '糖可视 - ' + title;
};

util.cookies = Cookies;

util.ajax = axios.create({
    baseURL: PublicUrlAPI,
    timeout: 30000,
    headers: {'Authorization': Cookies.get('user_token'),'Content-Type': 'application/json;charset=UTF-8' }
});

//处理身份过期
/*util.ajax.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error && error.response && error.response.status === 401) {
        router.push({
            path: "/login",
            query: {
                unauthorized: 'true'
            }
        });
        throw Error("授权失败，请重新登录！");
    }
    return Promise.reject(error);
});

util.isEmptyObject = (obj) => {
    var name;
    for (name in obj) {
        return false;
    }
    return true;
};*/

export default util;