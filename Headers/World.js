import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class World extends Component {
  render(){
    return(
      <View style={styles.textBox}>
      <Text style={styles.text}>About Our World</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textBox: {
    backgroundColor: '#73648a'
  },
text: {
  color: 'white',
  padding: 20,
  fontSize: 40,
  textAlign: 'center',
  fontWeight: 'bold',
  fontFamily: 'Academy Engraved LET'
}
})