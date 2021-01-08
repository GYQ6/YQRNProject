import React, {Component} from 'react';
import Toast from 'teaset/components/Toast/Toast';

const ToastPosition = {
  TOP: 'top',
  CENTER: 'center',
  BOTTOM: 'bottom',
};
class YQToast {
  static showToast(text, position = ToastPosition.CENTER) {
    Toast.show({
      text,
      position: position,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
  }
}

export default YQToast;
