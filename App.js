import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './src/components/Home'

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Home />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
