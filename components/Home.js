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
} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

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
        <View style={styles.container}>

        <Image source={require('../assets/images/logo.png') }
               style={styles.logo}
        />

          <View style={styles.login}>
              <TextInput
                title="id"
                onChangeText={(id) => this.setState({ id })}
                style={styles.id}
                placeholder='아이디를 입력하세요'
              />
              <TextInput
                title="pw"
                onChangeText={(pw) => this.setState({ pw })}
                style={styles.pw}
                secureTextEntry = {true}
                placeholder='비밀번호를 입력하세요'
              />

              <Button
                onPress={this.login.bind(this)}
                title="LOGIN"
                style={styles.btnLogin}
              />
              <Button
                onPress={() => this.props.navigation.navigate('Join')}
                title="JOIN"
                style={styles.btnJoin}
              />
            </View>
        </View>
    )
  }
}

class Join extends React.Component {

    state = {
      id: '',
      pw: '',
      isWomen: '',
      email: '',
    };

    joinSuccess(){
      const { id, pw, isWomen, email } = this.state;
      alert(`id: ${id}, password: ${pw}, isWomen: ${isWomen}, email: ${email}`);
    };

    render(){
        return (
          <View style={styles.container}>
              <Button
                title = '로그인 화면으로 돌아가기'
                onPress = {()=>this.props.navigation.navigate('Login')}

              />
              <Text>Join</Text>

              <View style={styles.join}>
                  <TextInput
                    title="id"
                    onChangeText={(id) => this.setState({ id })}
                    style={styles.textinput}
                    placeholder='아이디를 입력하세요'
                  />
                  <Button
                    title="중복확인"
                  />
                  <TextInput
                    title="pw"
                    style={styles.textinput}
                    secureTextEntry = {true}
                    placeholder='비밀번호를 입력하세요'
                  />
                  <TextInput
                    title="pw"
                    onChangeText={(pw) => this.setState({ pw })}
                    style={styles.textinput}
                    secureTextEntry = {true}
                    placeholder='비밀번호를 동일하게 한번 더 입력하세요'
                  />
                  <TextInput
                    title="isWomen"
                    style={styles.textinput}
                    onChangeText={(isWomen) => this.setState({ isWomen })}
                    placeholder='주민번호 뒷자리 중 첫번째 숫자를 입력하세요'
                  />
                  <TextInput
                    title="email"
                    onChangeText={(email) => this.setState({ email })}
                    style={styles.textinput}
                    placeholder='이메일을 입력하세요'
                  />

                  <Button
                    onPress={this.joinSuccess.bind(this)}
                    title="JOIN"
                  />
                </View>
          </View>

        )
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
    logo: {
      width: 175,
      height: 175,
    },
    textinput: {
      color: 'black',
      fontSize: 15,
      marginBottom : 30,
    },
    login: {
      flex: 1,
      marginTop: -100,
      marginBottom : 16,
      justifyContent: "center",
      alignItems: "center",
    },
    btnLogin: {
      marginTop: 30,
    },
    btnJoin: {
      marginTop: 30,
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

const App = createAppContainer(AppNavigator);

export default App
