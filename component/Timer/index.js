import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Button from '../Button';

class Timer extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"}/>
        <View style={styles.upper}>
            <Text style={styles.timer}>25:00</Text>
        </View>
        <View style={styles.lower}>
            <Button iconName="play-circle" onPress={() => alert('it works play')}></Button>
            <Button iconName="stop-circle" onPress={() => alert('it works stop')}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 2,
      backgroundColor: "#CE0B24"
  },
  upper: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  lower: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  timer: {
      color: "white",
      fontSize: 120,
      fontWeight: "100"
  }
});

export default Timer