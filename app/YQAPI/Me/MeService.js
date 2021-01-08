/*
 * @Author: gyq
 * @Date: 2020-12-30 14:58:23
 * @Last Modified by: gyq
 * @Last Modified time: 2020-12-30 15:34:11
 */

import {ME_HOME_URL} from './MeHelper';
import YQRequest from '../../YQRequestManager/YQRequest';

class YQMeService {
  static fetchMeHomeNetwork = (token) => {
    return YQRequest.get(
      ME_HOME_URL,
      {
        headers: {
          token: token,
        },
      },
      {},
    );
  };
}

export default YQMeService;
