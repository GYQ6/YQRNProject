

import React, { Component } from 'react'
import { Image, StyleSheet } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import YQHome from '../Home/YQHome'
import YQExam from '../Exam/YQExam'
import YQStudy from '../Study/YQStudy'
import YQMine from '../Mine/YQMine'

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

class YQTab extends Component {
    state = {
        selectedTab: HOME,
        paths: [
            {
                selected: HOME,
                title: HOME,
                renderIcon: HOME_NORMAL,
                renderSelectedIcon: HOME_FOUS,
                component: <YQHome />
            },
            {
                selected: STUDY,
                title: STUDY,
                renderIcon: STUDY_NORMAL,
                renderSelectedIcon: STUDY_FOUS,
                component: <YQStudy />
            },
            {
                selected: EXAM,
                title: EXAM,
                renderIcon: EXAM_NORMAL,
                renderSelectedIcon: EXAM_FOUS,
                component: <YQExam />
            },
            {
                selected: ME,
                title: ME,
                renderIcon: ME_NORMAL,
                renderSelectedIcon: ME_FOUS,
                component: <YQMine />
            }
        ]
    }
    render() {
        const { paths, selectedTab } = this.state
        return (
            <TabNavigator style={styles.tabStyle}>
                { paths.map((v, i) => 
                    <TabNavigator.Item
                        key={i}
                        selected={selectedTab === v.selected}
                        title={v.title}
                        titleStyle={{ color: '#999999' }}
                        selectedTitleStyle={{ color: '#333333' }}
                        renderIcon={() => <Image style={styles.tabItemImage} source={{uri: v.renderIcon}}/>}
                        renderSelectedIcon={() => <Image style={styles.tabItemImage} source={{uri: v.renderSelectedIcon}}/>}
                        onPress={() => this.setState({ selectedTab: v.selected })}>
                        {v.component}
                    </TabNavigator.Item>
                )}
            </TabNavigator>
        )
    }
}

const styles = StyleSheet.create({
    tabStyle: {
        backgroundColor: 'white'
    },
    tabItemImage: {
        width: 16,
        height: 16
    }
})

export default YQTab