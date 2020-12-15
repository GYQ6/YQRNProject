import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, View, Text, StyleSheet } from 'react-native';

const propTypes = {
  focused: PropTypes.bool,
  title: PropTypes.string,
  tabName: PropTypes.string,
  tabIconName: PropTypes.string,
  tabIconNameSelected: PropTypes.string
};

class TabIcon extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let iconPath = this.props.focused ? this.props.tabIconNameSelected : this.props.tabIconName;
    let color = this.props.focused ? '#333' : '#999';
    return (
      <View style={styles.viewStyle}>
        <Image style={{width: 16, height: 16, marginBottom: 8}} source={{uri: iconPath}}/>
        <Text style={[{ color: color }, { fontSize: 12 }]}>{this.props.title}</Text>
      </View>
    );
  }
}

TabIcon.propTypes = propTypes;

const styles= StyleSheet.create(
  {
    viewStyle: {
      alignItems: 'center',
    }
  })

export default TabIcon;
