/*
 * @Author: gyq
 * @Date: 2020-12-30 14:56:17
 * @Last Modified by: gyq
 * @Last Modified time: 2021-01-05 11:39:33
 */

import {MINIPROGRAMS_URL} from './ExamHelper';
import YQRequest from '../../YQRequestManager/YQRequest';

class YQExamService {
  static fetchExamNetwork = () => {
    return YQRequest.get(MINIPROGRAMS_URL, {}, {});
  };
}

export default YQExamService;
