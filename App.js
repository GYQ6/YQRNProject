
import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import YQNavigationContainer from './src/YQModule/BasePage/YQNavigation'
import YQRouter from './src/YQAPI/YQRouter'
import { Provider } from 'react-redux'

import {
  Scene,
  Router,
  Stack,
  Tabs
} from 'react-native-router-flux';

import YQHome from './src/YQModule/Home/YQHome'
import YQExam from './src/YQModule/Exam/YQExam'
import YQStudy from './src/YQModule/Study/YQStudy'
import YQMine from './src/YQModule/Mine/YQMine'

const HOME_NORMAL = 'tabbar_homeIcon_unselected'
const HOME = '首页'
const HOME_FOUS = 'tabbar_homeIcon_selected'
const STUDY = '学习'
const STUDY_NORMAL = 'tabbar_learnIcon_unselected'
const STUDY_FOUS = 'tabbar_learnIcon_selected'
const EXAM = '刷题'
const EXAM_NORMAL = 'tabbar_examIcon_unselected'
const EXAM_FOUS = 'tabbar_examIcon_selected'
const ME = '我的'
const ME_NORMAL = 'tabbar_meIcon_unselected'
const ME_FOUS = 'tabbar_meIcon_selected'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
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
