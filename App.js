import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from './component/Timer'

import reducer from './reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(reducer)

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Provider store={store}>
          <Timer/>
        </Provider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});