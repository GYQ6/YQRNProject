/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: gyq
 * @Date: 2020-12-28 13:32:37
 * @Last Modified by: gyq
 * @Last Modified time: 2020-12-30 13:48:59
 */

import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  kSeparationColor,
  kThemeBlack,
  kThemeSecondBlack,
  kThemeThreeBlack,
  kWidth,
} from '../../Utils/YQConstant';

class YQStudy extends React.Component {
  dataSource = ['课程1', '课程2', '课程3', '课程4'];
  _keyExtractor = (item, index) => item.key;
  render() {
    return (
      <View style={styles.contentStyle}>
        <FlatList
          style={{backgroundColor: kSeparationColor}}
          data={this.dataSource}
          keyExtractor={this._keyExtractor}
          renderItem={(item) => this._createListItem(item)}
        />
      </View>
    );
  }

  _createListItem = (item) => {
    return (
      <View
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 15,
          borderRadius: 10,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            marginLeft: 15,
            marginRight: 15,
            marginTop: 15,
            backgroundColor: 'white',
          }}>
          <View style={{marginBottom: 15}}>
            <Image style={{backgroundColor: 'red'}} />
            <Text
              style={{color: kThemeBlack, fontSize: 15, fontWeight: 'bold'}}>
              {item.item}
            </Text>
          </View>
          <View style={{paddingBottom: 20, flexDirection: 'row'}}>
            <Text style={{color: kThemeBlack, fontSize: 14}}>
              {'主讲老师: '}
              <Text style={{fontSize: 14, color: kThemeSecondBlack}}>老湿</Text>
            </Text>
          </View>
        </View>
        <View
          style={{
            paddingRight: 15,
            paddingLeft: 15,
            paddingTop: 15,
            backgroundColor: 'red',
            flexDirection: 'row',
            paddingBottom: 15,
            justifyContent: 'space-between',
          }}>
          <View style={{width: kWidth - 150, position: 'relative'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: kThemeSecondBlack, fontSize: 14}}>
                {'有效期至: '}
                <Text style={{color: kThemeThreeBlack, fontSize: 15}}>
                  {'2021-04-18'}
                </Text>
              </Text>
              <Text>{'已学习10%'}</Text>
            </View>
            <View style={{marginTop: 8, backgroundColor: 'gray', height: 2}} />
            <View
              style={{
                backgroundColor: 'blue',
                height: 2,
                position: 'relative',
                top: -2,
                left: 0,
                width: 100,
              }}
            />
          </View>
          <TouchableOpacity>
            <View
              style={{
                borderWidth: 1,
                borderColor: 'blue',
                borderRadius: 14,
                width: 75,
                height: 28,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{color: 'blue', fontSize: 14}}>开始学习</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
  },
});

export default YQStudy;
