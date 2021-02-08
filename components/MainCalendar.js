import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Platform,
    Image,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Logout from './Home.js';

class MainCalendar extends React.Component{

}

const styles = StyleSheet.create({

})

//네비게이션생성
const AppNavigator = createStackNavigator(
  {
    //이동할 페이지들 리스트
      Logout: Logout,

  },
);

Login.navigationOptions = {

}

const App = createAppContainer(AppNavigator);

export default App
