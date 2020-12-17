

import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import YQNavigationContainer from './src/YQModule/BasePage/YQNavigation'
import YQRouter from './src/YQAPI/YQRouter'
import { Provider } from 'react-redux'
import store from './src/Redux/Store'

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
