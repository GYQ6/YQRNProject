//import React from 'react'
//import axios from 'axios'
import { BASE_URL } from '../Utils/PathMap'
import Toast from '../Utils/YQToast'
import instance from '../YQRequest/YQInterceptors'
import { Message, Loading } from 'element-ui'

/*
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    'x-yt-dbp-pre': 'eyIkc2NyZWVuX2hlaWdodCI6NjY3LCIkb3NfdmVyc2lvbiI6IjEzLjMuMSIsIiRtYW51ZmFjdHVyZXIiOiJBcHBsZSIsIiRkZXZpY2VfaWQiOiI1ODAyMTJCOC1CNkNDLTQ4NTMtQTVGQS0zRjA0NTQ0RjhBM0QiLCIkY2FycmllciI6IuS4reWbveenu+WKqCIsIiRhcHBfaWQiOiJjb20ueWFudHUuWVRWSVAiLCIkd2lmaSI6dHJ1ZSwiJG1vZGVsIjoiaVBob25lOCwxIiwiJGlzX2ZpcnN0X2RheSI6ZmFsc2UsIiRvcyI6ImlPUyIsIiRhcHBfbmFtZSI6IueglOmAlOiAg+eglCIsIiRsaWJfdmVyc2lvbiI6IjIuMS4xNCIsIiRzY3JlZW5fd2lkdGgiOjM3NSwiJHRpbWV6b25lX29mZnNldCI6LTQ4MCwiJGFwcF92ZXJzaW9uIjoiMS40LjciLCIkbGliIjoiaU9TIiwiJG5ldHdvcmtfdHlwZSI6IldJRkkifQ==',
    'ytversion': 'v1.4.7',
    'platform': 'iOS',
    'Content-Type': 'application/json',
    'uuid': 'ACC1467B-F51A-42E3-92E3-F58DFDC9DAB9',
    'x-yt-dbp-cus': 'eyJwYWdlX2FkZHJlc3MiOiJZVExvZ2luQ29udHJvbGxlciIsImlzX2xvZ2luIjpmYWxzZSwiYXBwbGljYXRpb25fbmFtZSI6IueglOmAlOiAg+eglCIsInBhZ2VfbmFtZSI6IueZu+W9lemhtemdoiIsImFub255bW91c19pZCI6IjU4MDIxMkI4LUI2Q0MtNDg1My1BNUZBLTNGMDQ1NDRGOEEzRCIsImFwcGxpY2F0aW9uX3ZlcnNpb24iOiIxLjQuNyIsInBsYXRmb3JtX3R5cGUiOiJpT1MifQ=='
  }
})

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  console.log('数据获取中')
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    console.log('完成数据获取')
    return response.data
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export default {
  get: instance.get,
  post: instance.post
}
*/

function yqRequest(url, params, options = { loading: true, mock: false, error: true }, method) {

  let loadingInstance
  if (options.loading) loadingInstance = Loading.service();
  return Promise((resolve, reject) => {
    let data = {}
    if (method == 'get') data = { params }
    if (method == 'post') data = { data: params }
    instance({
      url,
      method,
      ...data
    }).then((res) => {
      // 此处作用很大，可以扩展很多功能。
      // 比如对接多个后台，数据结构不一致，可做接口适配器
      // 也可对返回日期/金额/数字等统一做集中处理
      if (res.status === 20000) {
        resolve(res.data);
      } else {
        // 通过配置可关闭错误提示
        if (options.error) Message.error(res.message);
        reject(res);
      }
    }).catch((error) => {
      Message.error(error.message)
    }).finally(() => {
      loadingInstance.close();
    })
  })
}

function get(url, params, options) {

  return yqRequest(url, params, options, 'get')
}

function post(url, params, options) {
  return yqRequest(url, params, options, 'post')
}

export default {
  get,
  post
}
