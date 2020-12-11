
import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import {kWidth, kHeight} from '../Utils/YQConstant'
import Toast from '../Utils/YQToast'
import YQRequest from '../YQRequestManager/YQRequest'
import { LOGIN_URL } from '../Utils/PathMap'
// import { Toast } from 'teaset/components/Toast/Toast'
const itemMargin = 8
const itemWidth = 72

export default class YQHome extends Component {
    render() {
        return (
            <SafeAreaView style={styles.listContainer}>
                {this.customTitleView()}
                <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                        { key: 'Dominic' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    style={{ backgroundColor: '#F5F5FA' }}
                    ListHeaderComponent={this.headerView}
                    renderItem={({ item }) => this._createListCell(item)}

                />
            </SafeAreaView>
        )
    }

    componentDidMount() {
        YQRequest.post( LOGIN_URL,{
            mobile: '18738193980',
            password: '123456'
        })
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        })
    }

    customTitleView() {
        return (
            <View style={{ height: 64, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ fontSize: 18, color: '#1D252C', marginLeft: 15, marginRight: 14 }}>研途考研</Text>
                <TouchableOpacity>
                    <View style={{ backgroundColor: '#F4F6F9', borderRadius: 14.5, alignItems: 'center', flexDirection: 'row', height: 29, paddingLeft: 9, width: 245 }}>
                        <Image></Image>
                        <Text style={{ fontSize: 12, color: '#C5C8CC' }}>🔎请输入老师姓名或课程名称</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={{ marginLeft: 14, fontSize: 22, color: '#C5C8CC' }}>🎧</Text>
                </TouchableOpacity>
            </View>
        )
    }

    headerView = () => {
        return (
            <View style={styles.headerViewStyle}>
                <Image style={styles.headerViewImageStyle}></Image>
                <View style={styles.headerViewBottomViewStyle}>
                    <View style={{ backgroundColor: '#F5F5FA', alignItems: 'center', marginLeft: itemMargin }}>
                        <Image style={{ width: itemWidth, height: itemWidth, backgroundColor: 'red', marginBottom: 10 }}></Image>
                        <Text style={{ fontSize: 12, color: '#1D252C', textAlign: 'center' }}>'20考研'</Text>
                    </View>
                    <View style={{ backgroundColor: '#F5F5FA', alignItems: 'center', marginLeft: itemMargin }}>
                        <Image style={{ width: itemWidth, height: itemWidth, backgroundColor: 'red', marginBottom: 10 }}></Image>
                        <Text style={{ fontSize: 12, color: '#1D252C', textAlign: 'center' }}>'21考研'</Text>
                    </View>
                    <View style={{ backgroundColor: '#F5F5FA', alignItems: 'center', marginLeft: itemMargin }}>
                        <Image style={{ width: itemWidth, height: itemWidth, backgroundColor: 'red', marginBottom: 10 }}></Image>
                        <Text style={{ fontSize: 12, color: '#1D252C', textAlign: 'center' }}>'名师之家'</Text>
                    </View>
                    <View style={{ backgroundColor: '#F5F5FA', alignItems: 'center', marginLeft: itemMargin }}>
                        <Image style={{ width: itemWidth, height: itemWidth, backgroundColor: 'red', marginBottom: 10 }}></Image>
                        <Text style={{ fontSize: 12, color: '#1D252C', textAlign: 'center' }}>'推荐计划'</Text>
                    </View>
                    <View style={{ backgroundColor: '#F5F5FA', alignItems: 'center', marginLeft: itemMargin }}>
                        <Image style={{ width: itemWidth, height: itemWidth, backgroundColor: 'red', marginBottom: 10 }}></Image>
                        <Text style={{ fontSize: 12, color: '#1D252C', textAlign: 'center' }}>'考研经验'</Text>
                    </View>
                    {/* {createHeaderViewAppViewItem('20考研')},
                    {createHeaderViewAppViewItem('21考研')},
                    {createHeaderViewAppViewItem('名师之家')}
                    {createHeaderViewAppViewItem('推荐计划')}
                    {createHeaderViewAppViewItem('考研经验')} */}
                </View>
                {/** 预热中 进行中  */}
                <FlatList
                    style={{ width: kWidth, height: 120, paddingLeft: 15, backgroundColor: '#F5F5FA' }}
                    data={[
                        { key: 'Devin' },
                        { key: 'Dan' },
                        { key: 'Dominic' },
                        { key: 'Jackson' }
                    ]}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={cellHeaderViewBottomViewCell}
                />
            </View>
        )
    }

    _createListCell(item) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={()=> this._clickListCell} >
                <View style={styles.itemStyle}>
                    <Text style={{ fontSize: 15, color: '#1D252C', fontWeight: 'bold', marginTop: 20, marginBottom: 30 }}>{item.key} + '2021考研名校班【政英+法硕(法学)+专 业课公共课1对1+暑期集'</Text>
                    <View style={{ flexDirection: 'row', marginBottom: 20 }}>
                        <UserItemView />
                        <UserItemView />
                        <UserItemView />
                        <UserItemView />
                        <View style={{ position: 'absolute', right: 15, alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: 11, color: '#FC1F39' }}>
                                $
                            <Text style={{ fontSize: 18, color: '#FC1F39' }}>2000</Text>
                            </Text>
                            <Text style={{ color: '#949494', fontSize: 10 }}>已售500人</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _clickListCell=()=> {
        console.log('gyq')
        // Toast.showLoading('clickCell')
        // setTimeout(() => {
        //     Toast.hideLoading()
        // }, 1000);
    }
}

const createHeaderViewAppViewItem = ({ value }) => {
    return (
        <View style={{ backgroundColor: 'white', alignItems: 'center', marginLeft: 8 }}>
            <Image style={{ width: 72, height: 72, backgroundColor: 'red', marginBottom: 10 }}></Image>
            <Text style={{ fontSize: 12, color: '#1D252C', textAlign: 'center' }}>'gyq'</Text>
        </View>
    )
}

const cellHeaderViewBottomViewCell = ({ item }) => {
    return (
        <TouchableOpacity>
            <View style={{ backgroundColor: 'white', alignItems: 'center', flexDirection: 'row', borderRadius: 12, marginRight: 10 }}>
                <View style={{ alignItems: 'flex-start', marginLeft: 20, marginTop: 10 }}>
                    {/**标题部分 */}
                    <Text
                        style={{ fontSize: 14, color: '#1D252C', marginBottom: 20, width: 140 }}
                        ellipsizeMode='tail'
                        numberOfLines={2}
                    >
                        {item.key}+名师带你玩转考研名称校名师名校考试...
                    </Text>
                    <Text style={{ fontSize: 10, color: '#FC1F39', marginBottom: 4 }}>拼团价</Text>
                    <Text style={{ fontSize: 11, color: '#FC1F39' }}>
                        $
                        <Text style={{ fontSize: 18, color: '#FC1F39' }}>2000</Text>
                    </Text>
                </View>
                <Image style={{ width: 120, height: 120, backgroundColor: 'red', marginBottom: 10 }}></Image>
            </View>
        </TouchableOpacity>
    )
}

class UserItemView extends Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white', marginRight: 8, alignItems: 'center' }}>
                <Image style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: 'red', marginBottom: 8 }}></Image>
                <Text style={{ color: '#949494', fontSize: 11 }}>'张雪峰'</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headerViewStyle: {
        flex: 1,
        backgroundColor: '#F5F5FA',
        marginBottom: 20
    },
    headerViewImageStyle: {
        marginLeft: 15,
        marginRight: 15,
        height: 140,
        borderRadius: 12,
        marginBottom: 20,
        backgroundColor: 'red'
    },
    headerViewBottomViewStyle: {
        alignItems: 'center',
        backgroundColor: '#F5F5FA',
        flexDirection: 'row',
        marginBottom: 24
    },
    listContainer: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#ffffff'
    },
    itemStyle: {
        padding: 15,
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 15
    }
})