import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import AboutIndiaHeader from '../Headers/AboutIndiaHeader'

export default class AboutIndia extends Component {
  render() {
    return(
      <View>
         <AboutIndiaHeader/>

         <Text style={styles.textStyle}>
           India, officially the Republic of India, is a country found south of Asia. It is the seventh-largest country by area, the most populous country, and the most populour democracy in the world. {"\n"} click the button below to start learning about India.
         </Text>

         <View style={styles.textContainer}>
           <TouchableOpacity style={styles.textBox}
           onPress={()=> this.props.navigation.navigate("AboutIndia1")}
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