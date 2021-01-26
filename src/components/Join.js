import React from 'react'

export default class JoinPage extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: '회원가입',

            }
      };

  render(){
      return (
        <View>
            <Text>Join</Text>
        </View>

    );
  };
}
