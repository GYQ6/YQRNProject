/*
 * @Author: gyq
 * @Date: 2020-12-30 15:52:01
 * @Last Modified by:   gyq
 * @Last Modified time: 2020-12-30 15:52:01
 */

import {MY_COURSE_URL} from './StudyHelper';
import YQRequest from '../../YQRequestManager/YQRequest';

class StudyService {
  static fetchMycourseNetwork = () => {
    return YQRequest.get(MY_COURSE_URL, {}, {});
  };
}

export default StudyService;
