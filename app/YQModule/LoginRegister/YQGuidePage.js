import React, { Component } from 'react'
import { FlatList, Image, StyleSheet, View, Text } from 'react-native'
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native-gesture-handler'
import { Actions } from 'react-native-router-flux'
import { kHeight, kWidth } from '../../Utils/YQConstant';
import { GuideImages } from '../../../YQLocalImages'


export default class YQGuidePage extends Component {

    _keyExtractor = (item, index) => index.toString();
    data = ['guidePages_1', 'guidePages_2', 'guidePages_3', 'guidePages_4', 'guidePages_5']
    render() {
        return (
            <View style={styles.containerStyle}>
                <FlatList
                    data={this.data}
                    style={styles.listStyle}
                    horizontal={true}
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => this.createListItem(item)}
                />
                <View style={styles.jumpButtonStyle}>
                    <TouchableOpacity onPress={() => this.handleJumpButtonEvent({ index: 4 })}>
                        <Text style={{ fontSize: 14, color: '#fff', width: 60, height: 30, textAlign: 'center'}}>跳过</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    createListItem = (item) => {
        let imageName = item.item
        let imageRequest = GuideImages[imageName]
        return (
            <TouchableWithoutFeedback
                onPress={() => this.handleJumpButtonEvent(item)}
            >
                <View style={styles.listItemStyle}>
                    <Image style={{width: kWidth, height: kHeight}} source={imageRequest}></Image>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    handleJumpButtonEvent = (item) => {
        if (item.index == 4) {
            Actions.replace('YQTabbar')
        }
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        position: 'relative',
        backgroundColor: '#ffffff'
    },
    listStyle: {
        // justifyContent: 'center',
        // alignItems: 'center'
        flex: 1,
        backgroundColor: 'white'
    },
    listItemStyle: {
        width: kWidth,
        height: kHeight,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    jumpButtonStyle: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        opacity: 0.5,
        borderRadius: 20,
        position: 'absolute',
        right: 20,
        top: 30,
        width: 60,
        height: 30
    }
})

