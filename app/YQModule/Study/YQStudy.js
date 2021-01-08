/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: gyq
 * @Date: 2020-12-28 13:32:37
 * @Last Modified by: gyq
 * @Last Modified time: 2021-01-08 14:15:39
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
import StudyService from '../../YQAPI/Study/StudyService';
import Realm from '../../Storage/Realm/RealmIndex';
import YQUserInfoManager from '../../Utils/YQUserInfoManager';
import {Actions} from 'react-native-router-flux';
import YQToast from '../../Utils/YQToast';

class YQStudy extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: [],
    };
  }
  _keyExtractor = (item, index) => item.key;
  render() {
    let myCourseArr = this.state.dataSource;
    return (
      <View style={styles.contentStyle}>
        <FlatList
          style={{backgroundColor: kSeparationColor}}
          data={myCourseArr}
          keyExtractor={this._keyExtractor}
          renderItem={(item, index) => this._createListItem(item, index)}
        />
      </View>
    );
  }

  componentDidMount() {
    //this._fetchNetwork();
    //this._getUserInfo();
    YQUserInfoManager.getUserToken((result) => {
      console.log(result);
      YQToast.showToast(result);
      if (result) {
        this._fetchNetwork(result);
      } else {
        Actions.jump('YQLoginPage');
      }
    });
  }

  _fetchNetwork = async (token) => {
    StudyService.fetchMycourseNetwork(token)
      .then((res) => {
        console.log(res);
        this.setState({
          dataSource: res.course,
        });
        console.log(this.state.dataSource);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  _getUserInfo = () => {
    let userInfos = Realm.objects('UserTable');
    if (userInfos.length > 0) {
      console.log('userInfo: ' + userInfos[0].name);
      let userInfo = JSON.parse(userInfos[0].data);
      console.log('userInfo: ' + userInfo);
      this._fetchNetwork(userInfo.token);
    }
  };

  _createListItem = (item, index) => {
    let courseModel = item.item;
    let teachers = courseModel.teachers;
    let teacherName = teachers[0].name;
    return (
      <View style={styles.listItemStyle}>
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
              {courseModel.name}
            </Text>
          </View>
          <View style={{paddingBottom: 20, flexDirection: 'row'}}>
            <Text style={{color: kThemeBlack, fontSize: 14}}>
              {'主讲老师: '}
              <Text style={{fontSize: 14, color: kThemeSecondBlack}}>
                {teacherName}
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.bottomViewStyle}>
          <View style={{width: kWidth - 150, position: 'relative'}}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={{color: kThemeSecondBlack, fontSize: 14}}>
                {'有效期至: '}
                <Text style={{color: kThemeThreeBlack, fontSize: 15}}>
                  {courseModel.deadline}
                </Text>
              </Text>
              <Text>{`已学${courseModel.progress * 100}%`}</Text>
            </View>
            <View style={styles.progressViewBackgroundStyle} />
            <View style={styles.progressViewStyle} />
          </View>
          <TouchableOpacity>
            <View style={styles.studyButtonStyle}>
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
  listItemStyle: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  bottomViewStyle: {
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 15,
    backgroundColor: 'gray',
    flexDirection: 'row',
    paddingBottom: 15,
    justifyContent: 'space-between',
  },
  progressViewBackgroundStyle: {
    marginTop: 8,
    backgroundColor: 'gray',
    height: 2,
  },
  progressViewStyle: {
    backgroundColor: 'blue',
    height: 2,
    position: 'relative',
    top: -2,
    left: 0,
    width: 100,
  },
  studyButtonStyle: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 14,
    width: 75,
    height: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default YQStudy;
