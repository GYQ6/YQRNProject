
import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, SafeAreaView, Image, Dimensions, TouchableOpacity } from 'react-native'
import { kWidth, kHeight } from '../../Utils/YQConstant'
import YQHomeService from '../../YQAPI/Home/HomeService'
import YQLoading from '../../Utils/YQLoading'
import YQToast from '../../Utils/YQToast'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import store from '../../Redux/Store/index'

const itemMargin = 8
const itemWidth = 72



export default class YQHome extends Component {

    constructor() {
        super()
        this._actionHandle()
    }

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
        YQHomeService.fetchLoginNetwork()
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
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
                <TouchableOpacity onPress={this._rightBarItemClick}>
                    <Text style={{ marginLeft: 14, fontSize: 22, color: '#C5C8CC' }}>🎧</Text>
                </TouchableOpacity>
            </View>
        )
    }

    headerView = () => {
        let array = ['20考研', '21考研', '名师之家', '推荐计划', '考研经验']
        return (
            <View style={styles.headerViewStyle}>
                <Image style={styles.headerViewImageStyle}></Image>
                <View style={styles.headerViewBottomViewStyle}>
                    {this.createHeaderViewAppViewItem(array[0])}
                    {this.createHeaderViewAppViewItem(array[1])}
                    {this.createHeaderViewAppViewItem(array[2])}
                    {this.createHeaderViewAppViewItem(array[3])}
                    {this.createHeaderViewAppViewItem(array[4])}
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
                    renderItem={({ item }) => this.cellHeaderViewBottomViewCell(item)}
                />
            </View>
        )
    }

    _createListCell(item) {
        return (
            <TouchableOpacity activeOpacity={0.5} onPress={this._clickListCell} >
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

    createHeaderViewAppViewItem = (value) => {
        return (
            <View style={{ backgroundColor: 'white', alignItems: 'center', marginLeft: 8 }}>
                <Image style={{ width: 72, height: 72, backgroundColor: 'red', marginBottom: 10 }}></Image>
                <Text style={{ fontSize: 12, color: '#1D252C', textAlign: 'center' }}>{value}</Text>
            </View>
        )
    }

    cellHeaderViewBottomViewCell = (item) => {
        return (
            <TouchableOpacity onPress={this._headerListCellItem}>
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

    _clickListCell = () => {
        let itemId = 100
        let value = 'gyq'
        let dic = {
            'itemId': itemId,
            'value': value
        }
        Actions.YQHomeSubPage(dic)
    }

    _rightBarItemClick = () => {
        YQHomeService.fetchLoginNetwork()
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error)
            })
    }

    _headerListCellItem = () => {
        YQToast.showToast('click')
    }

    _actionHandle = () => {
        store.subscribe(() => console.log(store.getState()))
    }
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

//export connect(null, mapdispathProps)()

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