import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Button from '../Button';

class Timer extends React.Component {

  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (nextProps.isPlaying && !currentProps.isPlaying) {
      const timeInterval = setInterval(() =>{
        currentProps.addSecond()
      }, 1000)
      this.setState(
        {
          timeInterval
        }
      )
      console.log('nexProps is playing');
    } else if (!nextProps.isPlaying && currentProps.isPlaying) {
      clearInterval(this.state.timeInterval)
      console.log('nexProps is not playing');
    }
  }
  
  render() {
    const {
      isPlaying,
      elapsedTime,
      timerDuration,
      startTimer,
      restartTimer,
      addSecond
    } = this.props;

    console.log(this.props);

    return (
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"}/>
        <View style={styles.upper}>
            <Text style={styles.timer}>{timerDuration - elapsedTime}</Text>
        </View>
        <View style={styles.lower}>
            {
              !isPlaying && (
                <Button iconName="play-circle" onPress={() => startTimer()}></Button>
              )
            }
            {
              isPlaying && (
                <Button iconName="stop-circle" onPress={() => restartTimer()}></Button>
              )
            }
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