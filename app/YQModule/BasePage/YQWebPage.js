/* eslint-disable react-native/no-inline-styles */
/*
 * @Author       : gyq
 * @Date         : 2021-01-13 10:21:34
 * @LastEditTime : 2021-01-14 15:34:21
 * @LastEditors  : gyq
 * @FilePath     : /YQReactNativeProject/app/YQModule/BasePage/YQWebPage.js
 */

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import WebView from 'react-native-webview';
import {kWidth, kNavBarHeight, kMarginSpaceLeft} from '../../Utils/YQConstant';
import {CommentImages} from '../../../YQLocalImages';
import {Button} from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';

export default class YQWebPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uri: this.props.uri,
      title: this.props.title,
    };
  }
  render() {
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        {/* <View style={styles.customHeaderViewStyle}>
          <Image source={goBackRequest} />
          <Text>{this.state.title}</Text>
        </View> */}
        <Button onClick={this._clickNavLeftItem}>
          <Text>click</Text>
        </Button>
        <WebView
          ref={(ref) => {
            this.webview = ref;
          }}
          source={{uri: this.state.uri}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          scalesPageToFit={true}
          mixedContentMode={'always'}
          automaticallyAdjustContentInsets={true}
          allowUniversalAccessFromFileURLs={true}
          mediaPlaybackRequiresUserAction={true}
          startInLoadingState={true}
          style={styles.webviewStyle}
        />
      </View>
    );
  }

  _clickNavLeftItem = () => {
    Actions.pop();
  };
}

const goBackRequest = CommentImages.goBackImage;

const styles = StyleSheet.create({
  customHeaderViewStyle: {
    flexDirection: 'row',
    height: kNavBarHeight,
    paddingHorizontal: kMarginSpaceLeft,
    backgroundColor: 'red',
    justifyContent: 'center',
    //alignContent: 'center',
  },
  customHeaderViewBackImageStyle: {
    height: 17.5,
    width: 10,
  },
  webviewStyle: {
    width: kWidth,
    flex: 1,
  },
});
