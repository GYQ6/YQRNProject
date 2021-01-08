/* * @Author: gyq
 *@Date: 2021-01-04 13:42:17
 * @Last Modified by: gyq
 * @Last Modified time: 2021-01-07 10:46:04
 */
import Realm from 'realm';
/**用户表 */
const UserTable = {
  name: 'UserTable',
  properties: {
    name: 'string',
    data: 'string',
  },
};
// class UserTable extends Realm.Object {}
// UserTable.schema = {
//   name: 'UserTable',
//   properties: {
//     name: 'string',
//     data: 'string',
//   },
// };

export default new Realm({schema: [UserTable]});
