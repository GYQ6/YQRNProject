/*
 * @Author: gyq
 * @Date: 2020-12-30 14:56:17
 * @Last Modified by: gyq
 * @Last Modified time: 2020-12-30 15:32:48
 */

import {MINIPROGRAMS_URL} from './ExamHelper';
import YQRequest from '../../YQRequestManager/YQRequest';

class YQExamService {
  static fetchExamNetwork = () => {
    return YQRequest.get(MINIPROGRAMS_URL, {loading: true}, {});
  };
}

export default YQExamService;
