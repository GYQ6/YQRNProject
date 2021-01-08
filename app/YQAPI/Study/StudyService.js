/*
 * @Author: gyq
 * @Date: 2020-12-30 15:52:01
 * @Last Modified by: gyq
 * @Last Modified time: 2021-01-07 16:05:38
 */

import {MY_COURSE_URL} from './StudyHelper';
import YQRequest from '../../YQRequestManager/YQRequest';
import Realm from '../../Storage/Realm/RealmIndex';
import YQStorage from '../../Storage/AsyncStorage/YQStorage';
import YQToast from '../../Utils/YQToast';

class StudyService {
  static fetchMycourseNetwork = (token) => {
    console.log('token: ' + token);
    return YQRequest.get(MY_COURSE_URL, {
      headers: {
        token: token,
      },
      loading: true,
    });
  };
}

export default StudyService;
