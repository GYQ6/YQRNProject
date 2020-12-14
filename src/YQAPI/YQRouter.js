
import React, { Component } from 'react';
import {
    Scene,
    Router,
    Stack,
    Tabs
} from 'react-native-router-flux';

import YQHome from '../YQModule/Home/YQHome'
import YQExam from '../YQModule/Exam/YQExam'
import YQStudy from '../YQModule/Study/YQStudy'
import YQMine from '../YQModule/Mine/YQMine'
//import TabIcon from '../YQAPI/YQTabIcon'

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

class YQRouter extends Component {
    render() {
        return (
            <Router>
                <Stack>
                    <Scene hideNavBar>
                        <Tabs
                            key="tabbar"
                            routeName="tabbar"
                            backToInitial
                            onTabOnPress={() => {
                                console.log('Back to initial and also print this');
                            }}
                            showLabel={true}
                            //tabBarStyle={styles.tabBarStyle}
                            activeBackgroundColor="white"
                            inactiveBackgroundColor="rgba(255, 0, 0, 0.5)">
                            <Stack
                                key={HOME}
                                title={HOME}
                                //tabBarLabel="TAB #1"
                                //inactiveBackgroundColor="#FFF"
                                //activeBackgroundColor="#DDD"
                                //icon={TabIcon}
                                navigationBarStyle={{ backgroundColor: 'green' }}
                                titleStyle={{ color: 'white', alignSelf: 'center' }}>
                                <Scene
                                    key={HOME}
                                    component={YQHome}
                                    title={HOME}
                                    //onRight={() => alert('Right button')}
                                    // rightTitle="Right"
                                />
                            </Stack>
                            <Stack
                                key={STUDY}
                                title={STUDY}
                                //icon={TabIcon}
                            >
                                <Scene
                                    key="我的课程"
                                    component={YQStudy}
                                    title="我的课程"
                                //renderRightButton={() => <Text>'Right'</Text>}
                                />
                            </Stack>
                            <Stack
                                key={EXAM}
                                title={EXAM}
                                //icon={TabIcon}
                                >
                                <Scene
                                    key="刷题"
                                    component={YQExam}
                                    //rightTitle="Reset to 'tabbar'"
                                    onRight={() => Actions.reset('tabbar')}
                                />
                            </Stack>
                            <Scene
                                key={ME}
                                component={YQMine}
                                title={ME}
                                hideNavBar
                                //icon={TabIcon}
                            />
                        </Tabs>
                    </Scene>
                </Stack>
            </Router>
        )
    }

}

export default YQRouter;
