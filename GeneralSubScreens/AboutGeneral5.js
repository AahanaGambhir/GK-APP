import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import GeneralHeader from '../Headers/AppHeader'

export default class AboutIndia extends Component {
  render() {
    return(
      <View> 
       <GeneralHeader/>

       <Text style={styles.textStyle}>
       Q. 1024 Kilobytes is equal to?{"\n"}{"\n"}
        Ans. 1 Megabyte (MB)
       
       </Text>


       

       <View style={styles.textContainer}>
        <TouchableOpacity style={styles.back}
        onPress={()=> this.props.navigation.navigate("AboutGeneral4")}
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
  back: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginRight: 200,
    //marginTop: ,
    width: 100,
    height: 50 ,
    backgroundColor: '#73648A'

  },
  home: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginLeft: 200,
    marginTop: -170,
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