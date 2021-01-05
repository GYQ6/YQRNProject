/*
 * @Author: gyq
 * @Date: 2020-12-30 15:52:01
 * @Last Modified by: gyq
 * @Last Modified time: 2021-01-05 11:35:56
 */

import {MY_COURSE_URL} from './StudyHelper';
import YQRequest from '../../YQRequestManager/YQRequest';
import realm from 'realm';

class StudyService {
  static fetchMycourseNetwork = () => {
    return YQRequest.get(
      MY_COURSE_URL,
      {
        header: {
          //token: getUserToken(),
        },
      },
      {},
    );
  };
}

const getUserToken = () => {
  //let fullName = 'UserInfo' + '/' + 'UserTable';
  let userInfo = realm.objects('UserTable');
  let token = userInfo.token;
  console.log('token: ' + token);
  return token;
};

export default StudyService;
