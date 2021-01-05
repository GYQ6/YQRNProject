/* * @Author: gyq *
@Date: 2021-01-04 13:42:17
* @Last Modified by: gyq
* @Last Modified time: 2021-01-04 13:42:17
*/
import Realm from 'realm';
/**用户表 */
const UserTable = {
  name: 'UserTable',
  properties: {
    fullName: 'string',
    data: 'string',
  },
};

export default new Realm({schema: [UserTable]});
