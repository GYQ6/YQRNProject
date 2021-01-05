/* * @Author: gyq
 * @Date: 2020-12-31 16:08:52
 * @Last Modified by: gyq
 * @Last Modified time: 2021-01-04 11:21:24
 */

import {
  LOGIN_URL,
  REGISTER_URL,
  VALIDATE_CODE_URL,
  RESET_PASSWORD_URL,
  ACCOUT_USER_LOGOUT_URL,
} from './LoginRegisterHelper';
import YQRequest from '../../YQRequestManager/YQRequest';
import md5 from 'blueimp-md5';
import Realm from '../../Realm/RealmIndex';

class LoginRegister {
  static fetchLoginNetwork = (mobile, password) => {
    let userInfo = null;
    YQRequest.post(
      LOGIN_URL,
      {
        headers: {
          uuid: 'ACC1467B-F51A-42E3-92E3-F58DFDC9DAB9',
          ytversion: 'v1.4.8',
        },
      },
      {
        mobile: mobile,
        password: md5(password),
      },
    )
      .then((response) => {
        console.log(response);
        userInfo = response;
        Realm.create('UserEvent', {
          userName: 'UserInfo',
          data: JSON.stringify(response),
        });
      })
      .catch((error) => {
        //YQToast.showToast(error);
      });
    return userInfo;
  };
}

export default LoginRegister;
