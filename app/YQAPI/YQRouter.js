
import React, { Component } from 'react';
import {
    Scene,
    Router,
    Stack,
    Tabs,
    ActionConst,
    Modal,
    Lightbox
} from 'react-native-router-flux';
import { StackViewStyleInterpolator } from 'react-navigation-stack';

import YQHome from '../YQModule/Home/YQHome'
import YQExam from '../YQModule/Exam/YQExam'
import YQStudy from '../YQModule/Study/YQStudy'
import YQMine from '../YQModule/Mine/YQMine'
import TabIcon from '../YQAPI/YQTabIcon'
import YQCustomBackButton from '../YQAPI/YQCustomBackButton'

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

//子页面路由
import YQHomeSubPage from '../YQModule/Home/YQHomeSubPage'
import YQGuidePage from '../YQModule/LoginRegister/YQGuidePage'
import YQLoginPage from '../YQModule/LoginRegister/YQLoginPage'

class YQRouter extends Component {
    render() {
        return (
            <Router>
                <Modal key="modal" hideNavBar>
                    <Scene
                        key="YQGuidePage"
                        component={YQGuidePage}
                        hideNavBar
                        renderBackButton={() => <YQCustomBackButton />}
                        initial
                    >
                    </Scene>
                    {/* <Tabs
                        key="YQTabbar"
                        hideNavBar
                        panHandlers={null}
                        backToInitial
                        showLabel={false}
                        //tabBarStyle={styles.tabBarStyle}
                        activeBackgroundColor="white"
                    >
                        <Scene
                            key={HOME}
                            component={YQHome}
                            icon={TabIcon}
                            title={HOME}
                            tabIconName={HOME_NORMAL}
                            tabIconNameSelected={HOME_FOUS}
                            hideNavBar={true}
                        />
                        <Scene
                            key={STUDY}
                            component={YQStudy}
                            title="我的课程"
                            icon={TabIcon}
                            tabIconName={STUDY_NORMAL}
                            tabIconNameSelected={STUDY_FOUS}

                        //renderRightButton={() => <Text>'Right'</Text>}
                        />
                        <Scene
                            component={YQExam}
                            key={EXAM}
                            title={EXAM}
                            icon={TabIcon}
                            tabIconName={EXAM_NORMAL}
                            tabIconNameSelected={EXAM_FOUS}
                        />

                        <Scene
                            key={ME}
                            component={YQMine}
                            title={ME}
                            hideNavBar
                            icon={TabIcon}
                            tabIconName={ME_NORMAL}
                            tabIconNameSelected={ME_FOUS}
                        />
                    </Tabs> */}
                    <Scene key='YQTabbar'
                        hideNavBar
                        panHandlers={null}
                        type={ActionConst.RESET}
                        tabs
                        backToInitial
                        showLabel={false}
                        //tabBarStyle={styles.tabBarStyle}
                        activeBackgroundColor="white"
                    >
                        <Scene
                            key={HOME}
                            component={YQHome}
                            icon={TabIcon}
                            title={HOME}
                            tabIconName={HOME_NORMAL}
                            tabIconNameSelected={HOME_FOUS}
                            hideNavBar={true}
                        />
                        <Scene
                            key={STUDY}
                            component={YQStudy}
                            title="我的课程"
                            icon={TabIcon}
                            tabIconName={STUDY_NORMAL}
                            tabIconNameSelected={STUDY_FOUS}

                        //renderRightButton={() => <Text>'Right'</Text>}
                        />
                        <Scene
                            component={YQExam}
                            key={EXAM}
                            title={EXAM}
                            icon={TabIcon}
                            tabIconName={EXAM_NORMAL}
                            tabIconNameSelected={EXAM_FOUS}
                        />

                        <Scene
                            key={ME}
                            component={YQMine}
                            title={ME}
                            hideNavBar
                            icon={TabIcon}
                            tabIconName={ME_NORMAL}
                            tabIconNameSelected={ME_FOUS}
                        />
                    </Scene>
                    <Scene
                        key="YQHomeSubPage"
                        component={YQHomeSubPage}
                        title="首页子页面"
                        renderBackButton={() => <YQCustomBackButton />}>
                    </Scene>
                    {/* <Stack key='main'>
                        
                        
                    </Stack> */}
                    {/**模态跳转模块 */}
                    <Scene
                        key="YQLoginPage"
                        component={YQLoginPage}
                        hideNavBar
                    //renderBackButton={() => <YQCustomBackButton />}
                    >
                    </Scene>
                </Modal>
            </Router>
        )
    }
}

export default YQRouter;
