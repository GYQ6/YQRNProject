/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: gyq
 * @Date: 2020-12-30 13:43:56
 * @Last Modified by: gyq
 * @Last Modified time: 2020-12-30 13:43:56
 */

import React from 'react';
import {View, FlatList, StyleSheet, Image, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {kWidth} from '../../Utils/YQConstant';
import {MeImages} from '../../../YQLocalImages';
import {Actions} from 'react-native-router-flux';

class YQMine extends React.Component {
  state = {
    headerImageViewHeight: 200,
  };
  dataSource = [
    {
      image: 'me_wechatRemindIcon',
      title: '微信学习提醒',
      subTitle: '获取最新学习消息和动态',
      badgeShow: true,
      height: 60.0,
    },
    {
      image: 'me_postgraduateInformationIcon',
      title: '考研信息',
      subTitle: '完善信息，获得更精准服务',
      badgeShow: false,
      height: 60.0,
    },
    {
      image: 'me_groupPurchaseIcon',
      title: '我的拼团',
      subTitle: '',
      badgeShow: false,
      height: 60.0,
    },
    {
      image: 'me_courseCodeStartIcon',
      title: '课程码开课',
      subTitle: '',
      badgeShow: false,
      height: 60.0,
    },
    {
      image: 'me_securitySettingsIcon',
      title: '安全设置',
      subTitle: '',
      badgeShow: false,
      height: 60.0,
    },
    {
      image: 'me_customerFeedbackIcon',
      title: '用户反馈',
      subTitle: '',
      badgeShow: false,
      height: 60.0,
    },
    {
      image: 'me_onlineServiceIcon',
      title: '在线客服',
      subTitle: '',
      badgeShow: false,
      height: 60.0,
    },
    {
      image: 'me_versionUpdate',
      title: '版本更新',
      subTitle: '当前版本号：1.0.0',
      badgeShow: false,
      height: 60.0,
    },
  ];

  headerItemArr = [
    {
      image: '',
      title: '我的订单',
    },
    {
      image: '',
      title: '我的下载',
    },
    {
      image: '',
      title: '收货地址',
    },
    {
      image: '',
      title: '优惠券',
    },
  ];

  headerImageView = null;
  _keyExtractor = (item, index) => item.key;
  render() {
    let imageRequest = MeImages.meHeadBackgroundImage;
    return (
      <View style={styles.containerStyle}>
        <Image
          ref={(imageView) => {
            this.headerImageView = imageView;
          }}
          source={imageRequest}
          style={{
            width: kWidth,
            height: this.state.headerImageViewHeight,
            resizeMode: 'stretch',
          }}
        />
        <View
          style={{
            position: 'absolute',
            top: 0,
            width: kWidth,
            left: 0,
            height: 64,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              height: 20,
              width: 20,
              marginRight: 20,
            }}>
            <Image />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: 'red',
              height: 20,
              width: 20,
              marginRight: 15,
            }}>
            <Image />
          </TouchableOpacity>
        </View>
        <FlatList
          style={styles.listStyle}
          data={this.dataSource}
          keyExtractor={this._keyExtractor}
          ListHeaderComponent={this._headerView}
          renderItem={(item) => this._createListItem(item)}
          onScroll={(event) => this.scrollViewDidScroll(event)}
        />
      </View>
    );
  }

  _headerView = () => {
    return (
      <View style={{backgroundColor: 'rgba(0, 0, 0, 0)'}}>
        <TouchableOpacity onPress={this._handleLoginPageEvent}>
          <View
            style={{marginTop: 20, flexDirection: 'row', alignItems: 'center'}}>
            <Image
              style={{
                marginLeft: 15,
                width: 80,
                height: 80,
                backgroundColor: 'red',
                borderRadius: 40,
                borderColor: 'white',
                borderWidth: 2,
                marginRight: 10,
              }}
            />
            <View>
              <Text style={{fontSize: 20, color: 'black', marginBottom: 10}}>
                登录/注册
              </Text>
              <Text style={{fontSize: 13, color: '#999'}}>
                总有一天, 你会感谢淡出那个不放弃的自己!
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            {this.headerItemArr.map((value, index) =>
              this._createHeaderItem(value, index),
            )}
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  _createListItem = (item) => {
    let itemM = item.item;
    return (
      <View
        style={{
          position: 'relative',
          flexDirection: 'row',
          width: kWidth,
          height: itemM.height,
          borderBottomWidth: 0.5,
          borderBottomColor: '#eee',
          alignItems: 'center',
        }}>
        <Image
          style={{
            marginLeft: 15,
            marginRight: 10,
            width: 20,
            height: 20,
            backgroundColor: 'red',
          }}
        />
        <Text style={{fontSize: 15, color: '#333'}}>{itemM.title}</Text>
        <View style={{position: 'absolute', right: 15}}>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={null}>
            <Text style={{fontSize: 13, color: '#999', marginRight: 8}}>
              {itemM.subTitle}
            </Text>
            <Image style={{width: 10, height: 10, backgroundColor: 'red'}} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  _createHeaderItem = (item, index) => {
    return (
      <View
        style={{justifyContent: 'center', alignItems: 'center'}}
        key={index}>
        <Image
          style={{
            marginBottom: 8,
            backgroundColor: 'red',
            width: 25,
            height: 30,
          }}
        />
        <Text>{item.title}</Text>
      </View>
    );
  };

  scrollViewDidScroll = (event) => {
    let offsetY = -Math.ceil(event.nativeEvent.contentOffset.y);
    if (offsetY < 0) {
      return;
    }
    console.log(offsetY);
    let orginHeaderImageViewHeight = 200;
    this.setState({
      headerImageViewHeight: offsetY + orginHeaderImageViewHeight,
    });
  };

  _handleLoginPageEvent = () => {
    Actions.jump('YQLoginPage');
  };
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  listStyle: {
    flex: 1,
    //backgroundColor: 'white',
    position: 'absolute',
    top: 64,
    left: 0,
  },
  listItemStyle: {
    flexDirection: 'row',
    width: kWidth,
    height: 50,
  },
});

export default YQMine;
