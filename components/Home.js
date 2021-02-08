import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    Platform,
    Image,
    Keyboard, TouchableWithoutFeedback,
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Join from './Join.js';

class Login extends React.Component{
  state = {
    id: '',
    pw: '',
  };

  login(){
    const { id, pw } = this.state;
    alert(`id: ${id}, password: ${pw}`);
  }

  render() {

    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>

        <Image source={require('../assets/images/logo.png') }
               style={styles.logo}
        />

          <View style={styles.login}>
              <TextInput
                title="id"
                onChangeText={(id) => this.setState({ id })}
                style={styles.textinput}
                placeholder='아이디를 입력하세요'
              />
              <TextInput
                title="pw"
                onChangeText={(pw) => this.setState({ pw })}
                style={styles.textinput}
                secureTextEntry = {true}
                placeholder='비밀번호를 입력하세요'
              />
              <View style={styles.button}>
              <Button
                onPress={this.login.bind(this)}
                title="login"
                color="black"
              />
              <Button
                onPress={() => this.props.navigation.navigate('Join')}
                title="join"
                color="black"
              />
              </View>
            </View>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      width: 175,
      height: 175,
      marginTop: 56,
      marginBottom: -56,
    },
    textinput: {
      color: 'black',
      fontSize: 15,
      marginBottom : 30,
      borderColor: 'black',
      borderWidth: 1,
      width: 200,
      height: 35,
    },
    button:{
      flexDirection: 'row',
    },
    login: {
      flex: 1,
      marginTop: -100,
      marginBottom : 16,
      justifyContent: "center",
      alignItems: "center",
    },
})

//네비게이션생성
const AppNavigator = createStackNavigator(
  {
    //이동할 페이지들 리스트
      Login: Login,
      Join: Join,
  },
);

Login.navigationOptions = {
  header: null,
}

Join.navigationOptions = {
  header: null,
}

const App = createAppContainer(AppNavigator);

export default App
