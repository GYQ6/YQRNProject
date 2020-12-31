/* * @Author: gyq
 * @Date: 2020-12-31 16:08:52
 * @Last Modified by: gyq
 * @Last Modified time: 2020-12-31 17:09:14
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

class LoginRegister {
  static fetchLoginNetwork = (mobile, password) => {
    return YQRequest.post(
      LOGIN_URL,
      {},
      {
        mobile: mobile,
        password: md5(password),
      },
    );
  };
}

export default LoginRegister;
