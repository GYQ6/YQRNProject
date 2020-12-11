
import { ActivityIndicator } from 'react-native'
import Toast from 'react-native-root-toast'

let customKey = null;
/**
 * 文本提示框
 */
export default function toast(text, duration = Toast.durations.SHORT, position = Toast.positions.CENTER) {
  if (customKey) return
  customKey = Toast.show(text, {
    duration: duration,
    position: position,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 0,
  });
}

export function ToastHide() {
  if (!customKey) return
  Toast.hide(customKey)
  customKey = null
}