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
import Login from './Home.js';

export default class JoinPage extends React.Component {
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
                color = 'black'
              />


              <View style={styles.join}>
                <View style={styles.id}>
                  <TextInput
                    title="id"
                    onChangeText={(id) => this.setState({ id })}
                    style={styles.textinput}
                    placeholder='아이디를 입력하세요'
                  />
                  <Button
                    title="중복확인"
                    color='black'
                  />
                </View>
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
                    placeholder='주민번호를 입력하세요'
                  />
                  <TextInput
                    title="email"
                    onChangeText={(email) => this.setState({ email })}
                    style={styles.textinput}
                    placeholder='이메일을 입력하세요'
                  />

                  <Button
                    onPress={this.joinSuccess.bind(this)}
                    title="join"
                    color='black'
                  />
                </View>
          </View>

        )
     }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'white',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    id: {
      flexDirection: 'row',
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
    button: {
      marginTop: 30,
    },
})
