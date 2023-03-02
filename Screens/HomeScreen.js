import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import AppHeader from '../Headers/AppHeader'

export default class HomeScreen extends Component {
  render() {
    return(

      <View>
        <AppHeader/>


        <View style={styles.textContainer}>
         <TouchableOpacity style={styles.textBox}
         onPress={()=> this.props.navigation.navigate('AboutIndia')}
         >
           <Text style={styles.textStyle}> About India </Text>
         </TouchableOpacity>

      
        <TouchableOpacity style={styles.textBox}
        onPress={()=> this.props.navigation.navigate('World')}
>
           <Text style={styles.textStyle}> About World </Text>
         </TouchableOpacity>


         <TouchableOpacity style={styles.textBox}      
           onPress={()=> this.props.navigation.navigate('General')}
>
           <Text style={styles.textStyle}> General </Text>
         </TouchableOpacity>

        
        </View>
      </View>
      
     
    )
  }
}



const styles = StyleSheet.create({
  textContainer: {
    alignSelf: 'center',
    margin: 60,
  },
  textBox: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    margin: 20,
    width: 200,
    height: 50 ,
    backgroundColor: '#73648A'

  },
  textStyle: {
  color: 'white',
  padding: 25,
  fontSize: 20,
  fontWeight: 'bold',
  fontFamily: 'Academy Engraved LET',
  textAlign: 'center'
}
})