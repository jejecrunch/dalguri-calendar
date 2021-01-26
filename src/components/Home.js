import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    TouchableOpacity,
    Platform,
} from 'react-native'
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

class Login extends React.Component{
  render() {

    return (
        <View style={styles.container}>

        <Text style={styles.title}>로고</Text>

          <View style={styles.login}>
              <TextInput
                title="id"
                style={styles.id}
                theme={{ colors: { primary: 'green',underlineColor:'transparent',}}}
                underlineColor='red'
                placeholder='아이디를 입력하세요'
              />
              <TextInput
                title="pw"
                style={styles.pw}
                placeholder='비밀번호를 입력하세요'
              />

              <Button
                onPress={login}
                title="LOGIN"
              />
              <Button
                onPress={() => this.props.navigation.navigate('Join')}
                title="JOIN"
              />
            </View>
        </View>
    )
  }
}

class Join extends React.Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>회원 가입</Text>
        <Button
          title = '로그인 화면으로 돌아가기'
          onPress = {()=>this.props.navigation.navigate('Login')}

        />
      </View>
      );
  }
}


const styles = StyleSheet.create({
    container: {
        marginTop: 56,
        marginBottom : 16,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        color: '#212121',
        fontSize: 32,
        fontWeight: '600',
    },
    id: {
      color: 'green',
      fontSize: 15,
      marginBottom : 16,
    },
    pw: {
      color: '#4e4e40',
      fontSize: 15,
      marginBottom : 16,
    },
    login: {
      flex: 1,
      marginTop: -100,
      marginBottom : 16,
      justifyContent: "center",
      alignItems: "center",
    }
})

function login(){
  alert("login");
}

//네비게이션생성
const AppNavigator = createStackNavigator(
  {
    //이동할 페이지들 리스트
      Login: Login,
      Join: Join,
  },
  {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      },
  }
);

Login.navigationOptions = {
  headerTitle: '로그인',
}

Join.navigationOptions = {
  headerTitle: '회원가입',
}

const App = createAppContainer(AppNavigator);

export default App
