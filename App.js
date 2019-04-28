import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './component/Timer'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});