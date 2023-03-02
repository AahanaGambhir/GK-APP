import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import World from '../Headers/World'

export default class AboutWorld1 extends Component {
  render() {
    return(
      <View> 
       <World/>

       <Text style={styles.textStyle}>
       Q. Which is the tallest monument in the world? {"\n"}{"\n"}
       Ans. Statue of Unity, India
       </Text>



       <View style={styles.textContainer}>
        <TouchableOpacity style={styles.back}
        onPress={()=> this.props.navigation.navigate("AboutWorld4")}
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