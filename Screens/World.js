import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

import AboutIndiaHeader from '../Headers/World'

export default class AboutIndia extends Component {
  render() {
    return(
      <View>
         <AboutIndiaHeader/>

         <Text style={styles.textStyle}>
           Earth is the third planet from the Sun and the only place known in the universe where life has originated and found habitability. 
           While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.
 {"\n"} click the button below to start learning about India.
         </Text>

         <View style={styles.textContainer}>
           <TouchableOpacity style={styles.textBox}
           onPress={()=> this.props.navigation.navigate("AboutWorld1")}
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