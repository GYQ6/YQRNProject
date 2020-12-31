
import YQToast from '../Utils/YQToast'
//网络错误
export const NETWORK_ERROR = 1;
//网络超时
export const NETWORK_TIMEOUT = 2;
//网络返回数据格式化异常
export const NETWORK_JSON_EXCEPTION = 3;

export const SUCCESS = 20000;

export default function (code, statusText=null) {
    switch (code) {
        case 400:
            //验证码错误
            
            return "验证码错误";
        case 401:
            //授权逻辑
            
            return "未授权或授权失败";//401 Unauthorized
        case 403:
            
            return "403权限错误";
        case 404:
            
            return "404错误";
        case 410:
            
            return "410错误";
        case NETWORK_TIMEOUT:
            //超时
            return '网络请求超时';
        default:
            return "其他异常"
    }

}