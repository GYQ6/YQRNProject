
import YQLoading from '../Utils/YQLoading'
import instance from './YQInterceptors'
import * as Code from '../YQRequestManager/YQNetworkCode'
import handlerError from '../YQRequestManager/YQNetworkCode'
import YQToast from '../Utils/YQToast';

function request(url, params, options = { loading: true, headers: {} }, method) {

  if (options.loading) YQLoading.showLoading();
  return new Promise((resolve, reject) => {
    let headers = options['headers']
    instance({
      url: url,
      method: method,
      data: params,
      headers: headers
    }).then((res) => {
      // 此处作用很大，可以扩展很多功能。
      // 比如对接多个后台，数据结构不一致，可做接口适配器
      // 也可对返回日期/金额/数字等统一做集中处理
      console.log(res)
      if (res != null && res.code == Code.SUCCESS) {
        resolve(res.data);
      } else {
        //配置错误提示
        if (res.message) {
          YQToast.showToast(messagError)
        } else {
          let messagError = handlerError(res.code, res.message)
          YQToast.showToast(messagError)
        }
      }
    }).catch((error) => {
      YQToast.showToast(error)
      //let errorMessage = handlerError(error.code, error)
    }).finally(() => {
      YQLoading.close()
    })
  })
}

function get(url, params, options) {
  return request(url, params, options, 'get')
}

function post(url, params, options) {
  return request(url, params, options, 'post')
}

export default {
  get,
  post
}
