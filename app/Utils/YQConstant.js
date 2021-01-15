/*
 * @Author       : gyq
 * @Date         : 2020-12-11 10:02:26
 * @LastEditTime : 2021-01-14 11:05:28
 * @LastEditors  : gyq
 * @FilePath     : /YQReactNativeProject/app/Utils/YQConstant.js
 */

import {Dimensions, Platform} from 'react-native';
/**配置项目通用size */
export const kWidth = Dimensions.get('window').width;
export const kHeight = Dimensions.get('window').height;
export const kIosNavBarHeight = 64;
export const kAndrNavBarHeight = 64;
export const kTabbarHeight = 49;
export const kListHeight = kHeight - kNavBarHeight - kTabbarHeight;
export const kMarginSpace = 10;
export const kMarginSpaceLeft = 15;
export const kMarginSpaceRight = 15;
export const kSeparationWidth = 0.5;
export const kNavBarHeight =
  Platform.OS === 'ios' ? kIosNavBarHeight : kAndrNavBarHeight;

/**常用样色 */
export const kThemeBlack = '#333';
export const kThemeSecondBlack = '#666';
export const kThemeThreeBlack = '#999';
export const kSeparationColor = '#eee';
