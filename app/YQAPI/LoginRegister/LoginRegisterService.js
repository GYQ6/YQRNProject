/* * @Author: gyq
 * @Date: 2020-12-31 16:08:52
 * @Last Modified by: gyq
 * @Last Modified time: 2021-01-07 11:12:46
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
import Realm from '../../Storage/Realm/RealmIndex';
import {YQStorage} from '../../Storage/AsyncStorage/YQStorage';
import YQToast from '../../Utils/YQToast';

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
        //缓存方式一
        // try {
        //   Realm.write(() => {
        //     let resultData = Realm.objects('UserTable');
        //     Realm.delete(resultData);
        //     Realm.create('UserTable', {
        //       name: 'UserInfo',
        //       data: JSON.stringify(userInfo),
        //     });
        //   });
        // } catch (error) {
        //   console.log(error);
        // }
        //缓存方式二
        YQStorage.save('userInfo', JSON.stringify(userInfo));
      })
      .catch((error) => {
        YQToast.showToast(error);
      });
    return userInfo;
  };
}

export default LoginRegister;
