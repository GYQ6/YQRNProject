
import axios from 'axios'
import { BASE_URL } from '../YQAPI/PathMap'


const service = axios.create({
    baseURL: BASE_URL,
    headers: {},
    timeout: 10000
})

service.interceptors.request.use(
    function (config) {
        //自定header
        //config.headers
        return config
    }
)

service.interceptors.response.use(
    function (response) {
        //对返回结果进行处理
        const result = response.data
        if (__DEV__) {
            console.log(result)
        }
        return result
    },
    function (error) {
        //Message.error('网络请求异常, 请稍后重试!')
        console.log(error)
    }
)

export default service