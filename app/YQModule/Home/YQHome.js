/* eslint-disable react-native/no-inline-styles */
/*
 * @Author: gyq
 * @Date: 2020-12-17 17:59:15
 * @Last Modified by: gyq
 * @Last Modified time: 2020-12-30 14:30:36
 */

import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import {kWidth, kThemeThreeBlack, kMarginSpace} from '../../Utils/YQConstant';
import YQHomeService from '../../YQAPI/Home/HomeService';
import YQToast from '../../Utils/YQToast';
import {Actions} from 'react-native-router-flux';
import store from '../../Redux/Store/index';
import Swiper from 'react-native-swiper';
import {Toast} from '@ant-design/react-native';

export default class YQHome extends Component {
  constructor() {
    super();
    this._actionHandle();
    this.state = {
      homeModel: {},
      isRefreshing: true,
    };
  }

  render() {
    let recommendArr = this.state.homeModel.recommend;
    return (
      <SafeAreaView style={styles.listContainer}>
        {this.customTitleView()}
        <FlatList
          data={recommendArr}
          style={{backgroundColor: '#F5F5FA'}}
          ListHeaderComponent={this.headerView}
          renderItem={({item}) => this._createListCell(item)}
          onRefresh={() => {
            this._fetchHomeNetwork(1);
          }}
          refreshing={this.state.isRefreshing === true ? true : false}
          onEndReachedThreshold={0.3}
          onEndReached={() => {
            this._fetchHomeNetwork(1);
          }}
        />
      </SafeAreaView>
    );
  }

  componentDidMount() {
    this._fetchHomeNetwork(1);
  }

  _fetchHomeNetwork = (page) => {
    YQHomeService.fetchHomeNetwork()
      .then((response) => {
        this.setState({homeModel: response, isRefreshing: false});
        console.log(response);
        console.log(this.state.homeModel);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  customTitleView() {
    return (
      <View
        style={{
          height: 64,
          backgroundColor: 'white',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontSize: 18,
            color: '#1D252C',
            marginLeft: 15,
            marginRight: 14,
          }}>
          研途考研
        </Text>
        <TouchableOpacity>
          <View
            style={{
              backgroundColor: '#F4F6F9',
              borderRadius: 14.5,
              alignItems: 'center',
              flexDirection: 'row',
              height: 29,
              paddingLeft: 9,
              width: 245,
            }}>
            <Image />
            <Text style={{fontSize: 12, color: '#C5C8CC'}}>
              🔎请输入老师姓名或课程名称
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._rightBarItemClick}>
          <Text style={{marginLeft: 14, fontSize: 22, color: '#C5C8CC'}}>
            🎧
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  headerView = () => {
    if (!this.state.homeModel) {
      return;
    }
    let navArray = this.state.homeModel.nav;
    console.log(navArray);
    let bannerArr = this.state.homeModel.banner;
    let activityArr = this.state.homeModel.activity;
    return (
      <View style={styles.headerViewStyle}>
        {this.createBannerView(bannerArr)}
        {this.createHeaderViewNavView(navArray)}
        {/** 预热中 进行中  */}
        <FlatList
          style={{
            width: kWidth,
            height: 120,
            paddingLeft: 15,
            backgroundColor: '#F5F5FA',
          }}
          data={activityArr}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => this.createHeaderViewBottomViewCell(item)}
        />
      </View>
    );
  };

  _createListCell(item) {
    let teachers = item.teachers;
    return (
      <TouchableOpacity activeOpacity={0.5} onPress={this._clickListCell}>
        <View style={styles.itemStyle}>
          <Text
            style={{
              fontSize: 15,
              color: '#1D252C',
              fontWeight: 'bold',
              marginTop: 20,
              marginBottom: 30,
            }}>
            {item.name}
          </Text>
          <View style={{flexDirection: 'row', marginBottom: 10}}>
            {teachers.map((value, i) => this.createUserItemView(value))}
            <View
              style={{position: 'absolute', right: 15, alignItems: 'flex-end'}}>
              <Text style={{fontSize: 11, color: '#FC1F39'}}>
                $<Text style={{fontSize: 18, color: '#FC1F39'}}>2000</Text>
              </Text>
              <Text style={{color: '#949494', fontSize: 10}}>
                {'已售' + item.count + '人'}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  createHeaderViewAppViewItem = (value, index) => {
    let itemWidth = (kWidth - kMarginSpace * 6) / 5;
    return (
      <View
        style={{alignItems: 'center', marginLeft: kMarginSpace}}
        key={index}>
        <Image
          style={{
            width: itemWidth,
            height: itemWidth - 10,
            marginBottom: 10,
            resizeMode: 'cover',
          }}
          source={{uri: value.image}}
        />
        <Text style={{fontSize: 12, color: '#1D252C', textAlign: 'center'}}>
          {value.title}
        </Text>
      </View>
    );
  };

  createBannerView = (item) => {
    if (!item) {
      return;
    }
    return (
      <Swiper
        horizontal={true}
        index={0}
        autoplay
        style={styles.headerViewSwiper}
        showsPagination={true}
        dot={
          <View
            style={{
              backgroundColor: 'white',
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }
        activeDot={
          <View
            style={{
              backgroundColor: kThemeThreeBlack,
              width: 8,
              height: 8,
              borderRadius: 4,
              marginLeft: 3,
              marginRight: 3,
              marginTop: 3,
              marginBottom: 3,
            }}
          />
        }>
        {item.map((value, i) => (
          <Image
            style={styles.headerViewImageStyle}
            source={{uri: value.img}}
          />
        ))}
      </Swiper>
    );
  };

  createHeaderViewNavView = (item) => {
    return (
      <View style={styles.headerViewBottomViewStyle}>
        {item != null
          ? item.map((value, index) =>
              this.createHeaderViewAppViewItem(value, index),
            )
          : null}
      </View>
    );
  };

  createHeaderViewBottomViewCell = (item) => {
    return (
      <TouchableOpacity onPress={this._headerListCellItem}>
        <View
          style={{
            backgroundColor: 'white',
            alignItems: 'center',
            flexDirection: 'row',
            borderRadius: 12,
            marginRight: 10,
          }}>
          <View
            style={{alignItems: 'flex-start', marginLeft: 20, marginTop: 10}}>
            {/**标题部分 */}
            <Text
              style={{
                fontSize: 14,
                color: '#1D252C',
                marginBottom: 20,
                width: 140,
              }}
              ellipsizeMode="tail"
              numberOfLines={2}>
              {item.name}
            </Text>
            <Text style={{fontSize: 10, color: '#FC1F39', marginBottom: 4}}>
              {item.has_piece_group === 1 ? '拼团价' : ''}
            </Text>
            <Text style={{fontSize: 11, color: '#FC1F39'}}>
              $
              <Text style={{fontSize: 18, color: '#FC1F39'}}>
                {item.price / 100}
              </Text>
            </Text>
          </View>
          <Image
            style={{
              width: 120,
              height: 120,
              backgroundColor: 'red',
              marginBottom: 10,
            }}
            source={{uri: item.activity_image}}
          />
        </View>
      </TouchableOpacity>
    );
  };

  createUserItemView = (item) => {
    console.log('teachersIcon: ' + item.image);
    return (
      <View
        style={{
          backgroundColor: 'white',
          marginRight: 8,
          alignItems: 'center',
        }}>
        <Image
          style={{
            width: 24,
            height: 24,
            borderRadius: 12,
            backgroundColor: 'gray',
            marginBottom: 8,
          }}
          source={{uri: item.image}}
        />
        <Text style={{color: '#949494', fontSize: 11}}>{item.name}</Text>
      </View>
    );
  };

  _clickListCell = () => {
    let itemId = 100;
    let value = 'gyq';
    let dic = {
      itemId: itemId,
      value: value,
    };
    Actions.YQHomeSubPage(dic);
  };

  _rightBarItemClick = () => {
    console.log('click');
    //YQToast.infoToast('loading...');
    Toast.loading({
      content: 'Loading...',
      duration: 1,
      onClose: function onClose() {
        return console.log('Load complete !!!');
      },
    });
  };

  _headerListCellItem = () => {
    Toast.offline('Network connection failed !!!');
  };

  _actionHandle = () => {
    store.subscribe(() => console.log(store.getState()));
  };
}

//export connect(null, mapdispathProps)()

const styles = StyleSheet.create({
  headerViewStyle: {
    flex: 1,
    backgroundColor: '#F5F5FA',
    marginBottom: 20,
  },
  headerViewSwiper: {
    height: 140,
    marginBottom: 20,
  },
  headerViewImageStyle: {
    height: 140,
    backgroundColor: 'red',
    marginLeft: 15,
    marginRight: 15,
    paddingRight: 15,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: 'cover',
  },
  headerViewBottomViewStyle: {
    alignItems: 'center',
    backgroundColor: '#F5F5FA',
    flexDirection: 'row',
    marginBottom: 24,
  },
  listContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  itemStyle: {
    padding: 15,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 15,
  },
});
