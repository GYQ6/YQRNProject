import React from 'react'
import { ActivityIndicator } from 'react-native'
import { Toast, Theme, Label } from 'teaset'

let customKey = null;

Toast.showLoading=(text)=> {
  if (customKey) return;
  customKey = Toast.show({
    text: {text},
    icon: <ActivityIndicator size='large' color={Theme.toastIconTintColor} />,
    position: 'top',
    duration: 1000000,
  });
}

Toast.hideLoading=()=> {
  if (!customKey) return;
  Toast.hide(customKey);
  customKey = null;
}



export default Toast