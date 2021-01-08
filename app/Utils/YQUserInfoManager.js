/* * @Author: gyq
 * @Date: 2021-01-07 13:57:49
 * @Last Modified by: gyq
 * @Last Modified time: 2021-01-08 14:14:21
 */
import Realm from '../Storage/Realm/RealmIndex';
import {YQStorage} from '../Storage/AsyncStorage/YQStorage';

class YQUserInfoManager {
  static getUserToken = (callBack) => {
    // let userInfos = Realm.objects('UserTable');
    // if (userInfos.length > 0) {
    //   let userInfo = JSON.parse(userInfos[0].data);
    //   return userInfo.token;
    // } else {
    //   return null;
    // }

    YQStorage.load('userInfo', (data) => {
      let result = JSON.parse(data);
      let token = result.token;
      callBack && callBack(token);
      return token;
    });
  };
}

export default YQUserInfoManager;
