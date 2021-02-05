import React from 'react'

export default class JoinPage extends React.Component {

  state = {
    id: '',
    pw: '',
    isWomen: false,
    email: '',
  };

  joinSuccess(){
    alert("회원가입완료");
  }

  static navigationOptions = ({ navigation }) => {
      return {
          headerTitle: '회원가입',

          }
  };

  render(){
      return (
        <View>
            <Text>Join</Text>

            <View style={styles.join}>
                <TextInput
                  title="id"
                  onChangeText={(id) => this.setState({ id })}
                  style={styles.id}
                  theme={{ colors: { primary: 'green',underlineColor:'transparent',}}}
                  underlineColor='red'
                  placeholder='아이디를 입력하세요'
                />
                <Button
                  title="중복확인"
                />
                <TextInput
                  title="pw"
                  onChangeText={(pw) => this.setState({ pw })}
                  style={styles.pw}
                  secureTextEntry = {true}
                  placeholder='비밀번호를 입력하세요'
                />
                <TextInput
                  title="pw"
                  onChangeText={(pw) => this.setState({ pw })}
                  style={styles.pw}
                  secureTextEntry = {true}
                  placeholder='비밀번호를 동일하게 한번 더 입력하세요'
                />
                <TextInput
                  title="isWomen"

                  onChangeText={(
                    if()
                  ) => this.setState({ pw })}
                  style={styles.pw}
                  secureTextEntry = {true}
                  placeholder='주민번호 뒷자리 중 첫번째 숫자를 입력하세요'
                />

                <Button
                  onPress={"joinSuccess"}
                  title="JOIN"
                />
              </View>
        </View>

    );
  };
}
