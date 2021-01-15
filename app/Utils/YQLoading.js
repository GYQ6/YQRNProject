/*
 * @Author       : gyq
 * @Date         : 2020-12-14 10:31:00
 * @LastEditTime : 2021-01-14 17:32:35
 * @LastEditors  : gyq
 * @FilePath     : /YQReactNativeProject/app/Utils/YQLoading.js
 */
import React from 'react';
import {ActivityIndicator} from 'react-native';
//import Toast from 'teaset/components/Toast/Toast';
import {Toast} from '@ant-design/react-native';

let customKey = null;
class YQLoading {
  static showLoading = (text = 'loading...') => {
    if (customKey) {
      return;
    }
    // customKey = Toast.show({
    //   text: text,
    //   icon: <ActivityIndicator size="large" color="white" />,
    //   position: 'center',
    //   duration: 1000000,
    // });
    customKey = Toast.loading(text, 1, () => {
      console.log('loading complete !!!');
    });
  };

  static close = () => {
    if (!customKey) {
      return;
    }
    Toast.hide(customKey);
    customKey = null;
  };
}

export default YQLoading;
