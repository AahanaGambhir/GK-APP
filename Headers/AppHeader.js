import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class AppHeader extends Component {
  render(){
    return(
      <View style={styles.textBox}>
      <Text style={styles.text}>General Knowledge</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: '#453750'
  },
text: {
  color: 'white',
  padding: 20,
  fontSize: 30,
  textAlign: 'center',
  fontWeight: 'bold',
  fontFamily: 'Academy Engraved LET'
}
})