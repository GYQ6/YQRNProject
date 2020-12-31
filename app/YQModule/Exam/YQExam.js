/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';
import {kSeparationColor, kThemeBlack, kWidth} from '../../Utils/YQConstant';
import YQExamService from '../../YQAPI/Exam/ExamService';

class YQExam extends React.Component {
  constructor() {
    super();
    this.state = {
      dataSource: {},
    };
  }

  _keyExtractor = (item, index) => item.key;
  render() {
    return (
      <View style={styles.contentStyle}>
        <FlatList
          data={this.state.dataSource}
          renderItem={(item, index) => this._createListItem(item, index)}
          numColumns={2}
          keyExtractor={this._keyExtractor}
        />
      </View>
    );
  }

  _createListItem = (item, index) => {
    let itemM = item.item;
    return (
      <View key={index} style={styles.itemStye}>
        <Image
          style={{
            marginTop: 20,
            width: 50,
            height: 50,
            marginBottom: 10,
          }}
          source={{uri: itemM.image}}
        />
        <Text style={{color: kThemeBlack, fontSize: 13, marginBottom: 20}}>
          {itemM.title}
        </Text>
      </View>
    );
  };

  componentDidMount() {
    YQExamService.fetchExamNetwork()
      .then((response) => {
        this.setState({dataSource: response});
        console.log(this.state.dataSource);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const styles = StyleSheet.create({
  contentStyle: {
    flex: 1,
  },
  columeWrapStyle: {
    borderWidth: 0.5,
    borderColor: kSeparationColor,
  },
  itemStye: {
    width: kWidth / 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderColor: kSeparationColor,
    borderRightWidth: 0.5,
  },
});

export default YQExam;
