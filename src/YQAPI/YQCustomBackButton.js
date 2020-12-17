import React, { Component } from 'react'
import {
    View, Text, TouchableOpacity, StyleSheet
} from 'react-native';
import PropTypes from 'prop-types';
import {Router, Actions, Scene} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons'

class YQCustomBackButton extends Component {
    render() {
        if (this.props.hideBackButton) {
            return <View/>;
        }
        return (
            <TouchableOpacity style={styles.contentStyle}  onPress={() => {
                console.log('gyq.pop')
                Actions.pop();
            }}>
                {/* <Icon name={'ios-settings'} size={20} color={'#333'}/> */}
                
                <Text>返回</Text>
            </TouchableOpacity>
        )
    }
}

YQCustomBackButton.propTypes = {
    hideBackButton: PropTypes.bool
};
YQCustomBackButton.defaultProps = {
    hideBackButton: false
};

const styles = StyleSheet.create({
    contentStyle: {
        marginLeft: 12
    }
})

export default YQCustomBackButton




