
import axios from 'axios'
import { BASE_URL } from '../YQAPI/PathMap'


const service = axios.create({
    baseURL: BASE_URL,
    headers: {platform: 'iOS'},
    timeout: 10000
})

service.interceptors.request.use(
    function (config) {
        //自定header
        //config.headers
        console.log( {config} )
        return config
    }
)

service.interceptors.response.use(
    function (response) {
        //对返回结果进行处理
        const result = response.data
        if (__DEV__) {
            console.log('返回原始数据:'+ result)
        }
        return result
    },
    function (error) {
        //Message.error('网络请求异常, 请稍后重试!')
        console.log('error: ' + error)
    }
)

export default service