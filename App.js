/*
 * @Author: gyq 
 * @Date: 2020-12-17 17:54:17 
 * @Last Modified by: gyq
 * @Last Modified time: 2020-12-21 17:06:58
 */


import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import YQNavigationContainer from './app/YQModule/BasePage/YQNavigation'
import YQRouter from './app/YQAPI/YQRouter'
import { Provider } from 'react-redux'
import store from './app/Redux/Store'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      // <Provider store={store}>
        
      // </Provider>
      <YQRouter/>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
