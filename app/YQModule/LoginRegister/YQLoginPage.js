/* eslint-disable react-native/no-inline-styles */
/* * @Author: gyq   * @Date: 2020-12-25 10:03:45    * @Last Modified by: gyq  * @Last Modified time: 2020-12-25 10:03:45  */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import {
  kMarginSpace,
  kMarginSpaceLeft,
  kMarginSpaceRight,
  kSeparationColor,
  kSeparationWidth,
  kThemeBlack,
  kThemeSecondBlack,
} from '../../Utils/YQConstant';
import YQToast from '../../Utils/YQToast';
import LoginRegister from '../../YQAPI/LoginRegister/LoginRegisterService';

export default class YQLoginPage extends Component {
  state = {
    loginType: 0, // 0: 手机号 1: 账号密码
    title: '手机快捷登录',
  };
  mobile = '';
  password = '';
  valideCode = '';

  render() {
    let subTitle = this.state.loginType === 0 ? '未注册的手机号将自动登录' : '';
    let inputPlaceholder =
      this.state.loginType === 0
        ? '请输入验证码'
        : '请输入6~16位数字或字母密码';
    return (
      <View
        style={{
          marginLeft: kMarginSpaceLeft,
          marginRight: kMarginSpaceRight,
          position: 'relative',
        }}>
        <View
          style={{
            marginTop: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={this._handleCloseEvent}>
            <Text style={{width: 20, height: 20}}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handleChangeLoginStyleEvent}>
            <Text style={{fontSize: 15, color: '#333'}}>账号密码</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 60}}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginBottom: kMarginSpace,
            }}>
            {this.state.title}
          </Text>
          <Text style={{fontSize: 15, color: '#333'}}>{subTitle}</Text>
        </View>
        <View style={{marginTop: 30}}>
          <TextInput
            defaultValue="18738193980"
            placeholder="请输入手机号"
            keyboardType="number-pad"
            clearButtonMode="while-editing"
            style={{
              color: '#333',
              fontSize: 15,
              borderBottomColor: kSeparationColor,
              borderBottomWidth: kSeparationWidth,
              height: 45,
            }}
            onChangeText={(text) => {
              this._mobileTextInputDidChange(text);
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
              borderBottomColor: kSeparationColor,
              borderBottomWidth: kSeparationWidth,
            }}>
            <TextInput
              placeholder={inputPlaceholder}
              keyboardType="number-pad"
              style={{color: '#333', fontSize: 15, height: 45}}
              onChangeText={(text) => {
                this._passwordTextInputDidChange(text);
              }}
            />
            <TouchableOpacity onPress={this._handleGetCodeEvent}>
              <Text style={{fontSize: 15, color: '#333'}}>获取验证码</Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity onPress={this._handleLoginEvent}>
          <View
            style={{
              height: 50,
              marginTop: 30,
              backgroundColor: kSeparationColor,
              borderRadius: 25,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: 15, color: 'gray'}}>立即登录</Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            height: 65,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <TouchableOpacity onPress={this._handleRegisterEvent}>
            <Text style={{fontSize: 15, color: kThemeBlack}}>注册账号</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this._handleRegisterEvent}>
            <Text style={{fontSize: 15, color: kThemeSecondBlack}}>
              忘记密码?
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: 300,
          }}>
          <Text style={{fontSize: 12, color: kThemeSecondBlack}}>
            其他方式登录
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: kMarginSpace,
            }}>
            <View
              style={{
                backgroundColor: 'red',
                height: 50,
                width: 50,
                borderRadius: 25,
                marginRight: 40,
              }}
            />
            <View
              style={{
                backgroundColor: 'red',
                height: 50,
                width: 50,
                borderRadius: 25,
              }}
            />
          </View>
        </View>
      </View>
    );
  }

  _createPasswordOrCodeUI() {
    console.log(this.state.loginType);
    if (this.state.loginType === 0) {
      return (
        <TouchableOpacity onPress={this._handleChangeLoginStyleEvent}>
          <Text style={{fontSize: 15, color: '#333', backgroundColor: 'red'}}>
            获取验证码
          </Text>
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={this._handleChangeLoginStyleEvent}>
          <Text style={{fontSize: 15, color: '#333'}}>👁</Text>
        </TouchableOpacity>
      );
    }
  }

  _mobileTextInputDidChange = (text) => {
    console.log(text);
    this.mobile = text;
  };

  _passwordTextInputDidChange = (text) => {
    console.log('_passwordTextInputDidChange:' + text);
    this.state.loginType === 0
      ? (this.valideCode = text)
      : (this.password = text);
  };

  _handleCloseEvent = () => {
    Actions.pop({animated: true});
  };

  _handleChangeLoginStyleEvent = () => {
    let type = this.state.loginType === 0 ? 1 : 0;
    this.setState({loginType: type});
  };

  _handleLoginEvent = () => {
    if (this.mobile.length !== 11) {
      return;
    }
    if (this.valideCode.length === 0 && this.password.length === 0) {
      return;
    }

    let value = '';
    this.state.loginType === 0
      ? (value = this.valideCode)
      : (value = this.password);

    LoginRegister.fetchLoginNetwork(this.mobile, value);
    Actions.replace('YQTabbar');
  };

  _handleRegisterEvent = () => {};

  _handleGetCodeEvent = () => {};
}
