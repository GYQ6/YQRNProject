
import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import YQNavigationContainer from './YQModule/BasePage/YQNavigation'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        < YQNavigationContainer/>
      </SafeAreaView >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  }
})
