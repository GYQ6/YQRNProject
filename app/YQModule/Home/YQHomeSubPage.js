/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import store from '../../Redux/Store/index';

export default class YQHomeSubPage extends Component {
  //构造函数
  constructor(props) {
    super(props);
    console.log(props);
  }
  //挂载
  componentWillMount() {
    console.log('componentWillMount...将要挂载');
  }
  componentDidMount() {
    console.log('componentDidMount...挂载完成');
  }

  shouldComponentUpdate() {
    console.log('shouldComponentUpdate...'); //render 渲染之前执行
    return false;
  }

  componentWillUpdate() {
    console.log('componentWillUpdate...');
  }

  componentDidUpdate() {
    console.log('componentDidUpdate...一切更新完执行');
  }

  componentWillReceiveProps() {
    //组件第一次存在dom中, 函数不会被执行
    //如果已经存在于dom中, 函数才会被执行
  }

  componentWillUnmount() {
    //组件将要被删除时执行
  }

  render() {
    console.log('render...挂载中');
    return (
      <TouchableOpacity
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
        onPress={this.refreshHomeListPage}>
        <Text>
          {this.props.itemId}
          {/* 单项数据流: 传递的数据readonly 不能修改,  子组件向父组件传值, 父组件传递一个方法 */}
        </Text>
      </TouchableOpacity>
    );
  }

  refreshHomeListPage = () => {
    store.dispatch(actions.refreshAction);
  };
}

const actions = {
  refreshAction: {
    type: 'REFRESH_LIST',
  },
};
