import YQLoading from '../Utils/YQLoading';
import instance from './YQInterceptors';
import * as Code from './YQNetworkCode';
import handlerError from './YQNetworkCode';
import YQToast from '../Utils/YQToast';

function request(
  url,
  options = {loading: true, headers: {}},
  params = {},
  method,
) {
  console.log(options);
  if (options.loading === true) {
    //YQLoading.showLoading();
  }
  return new Promise((resolve, reject) => {
    let headers = options.headers;
    let config = {};
    if (method === Method.get) {
      config = {
        url: url,
        method: method,
        headers: headers,
      };
    } else {
      config = {
        url: url,
        method: method,
        data: params,
        headers: headers,
      };
    }
    instance(config)
      .then((res) => {
        // 此处作用很大，可以扩展很多功能。
        // 比如对接多个后台，数据结构不一致，可做接口适配器
        // 也可对返回日期/金额/数字等统一做集中处理
        console.log('返回数据' + res);
        if (res != null && res.code === Code.SUCCESS) {
          resolve(res.data);
        } else {
          //配置错误提示
          console.log('返回的错误:' + res);
          // if (res !== undefined) {
          //   YQToast.showToast(res.msg);
          // } else {
          //   let messagError = handlerError(res.code, null);
          //   YQToast.showToast(messagError);
          // }
        }
      })
      .catch((error) => {
        YQToast.showToast(error);
      })
      .finally(() => {
        YQLoading.close();
      });
  });
}

const get = (url, options, params = {}) => {
  return request(url, options, params, Method.get);
};

const post = (url, options, params = {}) => {
  return request(url, options, params, Method.post);
};

const Method = {
  get: 'get',
  post: 'post',
};

export default {
  get,
  post,
};
