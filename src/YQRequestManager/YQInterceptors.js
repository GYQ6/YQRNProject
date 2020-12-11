
import axios from 'axios'
//import Message from 'element-ui'
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
        const result = response.data
        //对返回结果进行处理
        console.log(result)
        return result
    },
    function (error) {
        //Message.error('网络请求异常, 请稍后重试!')
        console.log('网络请求异常' + error)
    }
)

export default service