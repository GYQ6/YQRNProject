import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import store from '../../Redux/Store/index'

class YQExam extends React.Component {
    render() {
        console.log('render...挂载中')
        return (
            <TouchableOpacity style={{ flex:1, justifyContent:'center', alignItems:'center'}} onPress={this.refreshHomeListPage}>
                <Text>
                    click
                    {/* 单项数据流: 传递的数据readonly 不能修改,  子组件向父组件传值, 父组件传递一个方法 */}
                </Text>
            </TouchableOpacity>

        )
    }

    refreshHomeListPage = () => {
        store.dispatch(actions.refreshAction);
    }
}

const actions = {
    refreshAction: {
        type: 'REFRESH_LIST'
    }
}

export default YQExam