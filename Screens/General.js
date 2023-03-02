import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import GeneralHeader from '../Headers/AppHeader'

export default class General extends Component {
  render() {
    return(
      <View>
         <GeneralHeader/>

         <Text style={styles.textStyle}>
           General knowledge helps to keep us connected and up to date with every part of the world. Aside from that, it aids in our ability to have a positive social impact. It also aids in making important life decisions and deciding on career options.

 {"\n"} click the button below to start learning about India.
         </Text>

         <View style={styles.textContainer}>
           <TouchableOpacity style={styles.textBox}
           onPress={()=> this.props.navigation.navigate("AboutGeneral1")}
           >
            <Text> Let's start learning </Text>
           </TouchableOpacity>
         </View>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  textStyle: {
  padding: 20,
  fontSize: 20,
  textAlign: 'center',
  marginTop: 70,
},
textContainer: {
    alignSelf: 'center',
    margin: 60,
  },
  textBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
   marginTop: -30,
    width: 200,
    height: 50 ,
    backgroundColor: '#73648A'

  },
})