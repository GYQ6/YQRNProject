import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import YQTab from '../BasePage/YQTab';

const Stack = createStackNavigator();
class YQNavigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="YQTab" component={YQTab} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default YQNavigation;
