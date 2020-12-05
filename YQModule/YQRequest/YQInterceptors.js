
import axios from 'axios'
import Message from 'element-ui'
import { BASE_URL } from '../Utils/PathMap'

const service = axios.create({
    baseURL: BASE_URL,
    headers: {
        'x-yt-dbp-pre': 'eyIkc2NyZWVuX2hlaWdodCI6NjY3LCIkb3NfdmVyc2lvbiI6IjEzLjMuMSIsIiRtYW51ZmFjdHVyZXIiOiJBcHBsZSIsIiRkZXZpY2VfaWQiOiI1ODAyMTJCOC1CNkNDLTQ4NTMtQTVGQS0zRjA0NTQ0RjhBM0QiLCIkY2FycmllciI6IuS4reWbveenu+WKqCIsIiRhcHBfaWQiOiJjb20ueWFudHUuWVRWSVAiLCIkd2lmaSI6dHJ1ZSwiJG1vZGVsIjoiaVBob25lOCwxIiwiJGlzX2ZpcnN0X2RheSI6ZmFsc2UsIiRvcyI6ImlPUyIsIiRhcHBfbmFtZSI6IueglOmAlOiAg+eglCIsIiRsaWJfdmVyc2lvbiI6IjIuMS4xNCIsIiRzY3JlZW5fd2lkdGgiOjM3NSwiJHRpbWV6b25lX29mZnNldCI6LTQ4MCwiJGFwcF92ZXJzaW9uIjoiMS40LjciLCIkbGliIjoiaU9TIiwiJG5ldHdvcmtfdHlwZSI6IldJRkkifQ==',
        'ytversion': 'v1.4.7',
        'platform': 'iOS',
        'Content-Type': 'application/json',
        'uuid': 'ACC1467B-F51A-42E3-92E3-F58DFDC9DAB9',
        'x-yt-dbp-cus': 'eyJwYWdlX2FkZHJlc3MiOiJZVExvZ2luQ29udHJvbGxlciIsImlzX2xvZ2luIjpmYWxzZSwiYXBwbGljYXRpb25fbmFtZSI6IueglOmAlOiAg+eglCIsInBhZ2VfbmFtZSI6IueZu+W9lemhtemdoiIsImFub255bW91c19pZCI6IjU4MDIxMkI4LUI2Q0MtNDg1My1BNUZBLTNGMDQ1NDRGOEEzRCIsImFwcGxpY2F0aW9uX3ZlcnNpb24iOiIxLjQuNyIsInBsYXRmb3JtX3R5cGUiOiJpT1MifQ=='
    },
    timeout: 10000
})

service.interceptors.request.use(
    function (config) {
        //自定header
        //config.headers
        return config
    }
)

service.interceptors.request.use(
    function (response) {
        const result = response.data
        //对返回结果进行处理
        return result
    },
    function (error) {
        Message.error('网络请求异常, 请稍后重试!')
    }
)

export default service