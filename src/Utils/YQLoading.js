import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native'
import Toast from 'teaset/components/Toast/Toast'

let customKey = null;
class YQLoading extends Component {
    static showLoading=(text='加载中...')=> {
      if (customKey) return;
      customKey = Toast.show({
        text: text,
        icon: <ActivityIndicator size='large' color='white' />,
        position: 'center',
        duration: 1000000,
      });
    }
  
    static close=()=> {
      if (!customKey) return;
      Toast.hide(customKey);
      customKey = null;
    }
  }
  
  export default YQLoading