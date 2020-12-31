/*
 * @Author: gyq
 * @Date: 2020-12-30 14:58:23
 * @Last Modified by: gyq
 * @Last Modified time: 2020-12-30 15:34:11
 */

import {HOME_URL} from './HomeHelper';
import YQRequest from '../../YQRequestManager/YQRequest';

class YQHomeService {
  static fetchLoginNetwork = () => {
    return YQRequest.post(
      HOME_URL,
      {
        phone: '13776072264',
        c: '111',
      },
      {
        headers: {
          platform: 'iOS',
        },
        loading: false,
      },
    );
  };

  static fetchHomeNetwork = () => {
    return YQRequest.get(
      HOME_URL,
      {},
      {
        loading: true,
      },
    );
  };
}

export default YQHomeService;
