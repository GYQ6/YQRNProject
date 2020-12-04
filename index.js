/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//可以捕获到网络请求
global.XMLHttpRequest = global.origin.XMLHttpRequest || global.XMLHttpRequest
AppRegistry.registerComponent(appName, () => App);
