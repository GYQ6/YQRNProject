/*
 * @Author: gyq
 * @Date: 2020-12-30 14:58:23
 * @Last Modified by: gyq
 * @Last Modified time: 2021-01-07 16:07:54
 */

import {HOME_URL} from './HomeHelper';
import YQRequest from '../../YQRequestManager/YQRequest';

class YQHomeService {
  static fetchHomeNetwork = () => {
    return YQRequest.get(HOME_URL, {});
  };
}

export default YQHomeService;
