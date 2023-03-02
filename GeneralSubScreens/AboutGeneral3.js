import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import GeneralHeader from '../Headers/AppHeader'

export default class AboutGeneral3 extends Component {
  render() {
    return(
      <View> 
       <GeneralHeader/>

       <Text style={styles.textStyle}>
       Q. Which is the heavier metal of these two? Gold or Silver?{"\n"}{"\n"}
        Ans. Gold 
       
       </Text>


       <View style={styles.textContainer}>
        <TouchableOpacity style={styles.next}
        onPress={()=> this.props.navigation.navigate("AboutGeneral4")}
>
          <Text>Next</Text>
        </TouchableOpacity>
       </View>

       <View style={styles.textContainer}>
        <TouchableOpacity style={styles.back}
        onPress={()=> this.props.navigation.navigate("AboutGeneral2")}
>
          <Text>Back</Text>
        </TouchableOpacity>
       </View>

       <View style={styles.textContainer}>
        <TouchableOpacity style={styles.home}
        onPress={()=> this.props.navigation.navigate("HomeScreen")}
        >
          <Text>Home</Text>
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
  next: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: 200,
    width: 100,
    height: 50 ,
    backgroundColor: '#73648A'

  },
  back: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginRight: 200,
    marginTop: -170,
    width: 100,
    height: 50 ,
    backgroundColor: '#73648A'

  },
  home: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginRight: -15,
    marginTop: -200,
    width: 100,
    height: 50 ,
    backgroundColor: '#73648A'

  },
  textStyle: {
  padding: 25,
  fontSize: 20,
  textAlign: 'center',
  marginTop: 50
}
})