/*
 *                        .::::.
 *                      .::::::::.
 *                     :::::::::::
 *                  ..:::::::::::'
 *               '::::::::::::'
 *                 .::::::::::
 *            '::::::::::::::..
 *                 ..::::::::::::.
 *               ``::::::::::::::::
 *                ::::``:::::::::'        .:::.
 *               ::::'   ':::::'       .::::::::.
 *             .::::'      ::::     .:::::::'::::.
 *            .:::'       :::::  .:::::::::' ':::::.
 *           .::'        :::::.:::::::::'      ':::::.
 *          .::'         ::::::::::::::'         ``::::.
 *      ...:::           ::::::::::::'              ``::.
 *     ````':.          ':::::::::'                  ::::..
 *                        '.:::::'                    ':'````..
 * @Author       : gyq
 * @Date         : 2021-01-12 13:36:33
 * @LastEditTime : 2021-01-13 15:45:52
 * @LastEditors  : gyq
 * @FilePath     : /YQReactNativeProject/app/YQModule/Mine/YQAboutUs.js
 */

import React, {Component} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import YQMeService from '../../YQAPI/Me/MeService';
import {
  kMarginSpaceLeft,
  kSeparationColor,
  kSeparationWidth,
} from '../../Utils/YQConstant';
import {Actions} from 'react-native-router-flux';

export default class YQAboutUs extends Component {
  constructor() {
    super();
    this.state = {
      dataSource: ['服务协议', '隐私政策'],
      appInfo: {},
    };
  }

  componentDidMount() {
    YQMeService.fetchMeAboutUs()
      .then((res) => {
        this.setState({appInfo: res});
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <FlatList
        data={this.state.dataSource}
        renderItem={(item) => this._createListItem(item)}
      />
    );
  }

  _createListItem = (item) => {
    return (
      <TouchableOpacity onPress={this._clickListItemEvent}>
        <View style={styles.listItemStyle}>
          <Text>{item.item}</Text>
          <TouchableOpacity>
            <Image />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  _clickListItemEvent = (item) => {
    let urlPath;
    if (item === '服务协议') {
      urlPath = this.state.appInfo.user_agreement;
    } else {
      urlPath = this.state.appInfo.policy;
    }
    Actions.YQWebPage({uri: urlPath});
  };
}

const styles = StyleSheet.create({
  listItemStyle: {
    height: 60,
    borderBottomColor: kSeparationColor,
    borderBottomWidth: kSeparationWidth,
    justifyContent: 'center',
    paddingLeft: kMarginSpaceLeft,
  },
});
