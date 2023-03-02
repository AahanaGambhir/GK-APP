import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'

import HomeScreen from './Screens/HomeScreen';


import AboutIndia from './Screens/AboutIndia';
import AboutIndia1 from './IndiaSubScreens/AboutIndia1'
import AboutIndia2 from './IndiaSubScreens/AboutIndia2'
import AboutIndia3 from './IndiaSubScreens/AboutIndia3'
import AboutIndia4 from './IndiaSubScreens/AboutIndia4'
import AboutIndia5 from './IndiaSubScreens/AboutIndia5'


import World from './Screens/World';
import AboutWorld1 from './WorldSubScreens/AboutWorld1'
import AboutWorld2 from './WorldSubScreens/AboutWorld2'
import AboutWorld3 from './WorldSubScreens/AboutWorld3'
import AboutWorld4 from './WorldSubScreens/AboutWorld4'
import AboutWorld5 from './WorldSubScreens/AboutWorld5'

import General from './Screens/General';
import AboutGeneral1 from './GeneralSubScreens/AboutGeneral1';
import AboutGeneral2 from './GeneralSubScreens/AboutGeneral2';
import AboutGeneral3 from './GeneralSubScreens/AboutGeneral3';
import AboutGeneral4 from './GeneralSubScreens/AboutGeneral4';
import AboutGeneral5 from './GeneralSubScreens/AboutGeneral5';


export default class App extends Component {
  render() {
    return(
      <View>
      <AppContainer/>
      </View>
    )
  }
}

var AppNavigator = createSwitchNavigator({
  HomeScreen:HomeScreen,
  AboutIndia:AboutIndia,
  AboutIndia1:AboutIndia1,
  AboutIndia2:AboutIndia2,
  AboutIndia3:AboutIndia3,
  AboutIndia4:AboutIndia4,
  AboutIndia5:AboutIndia5,
  
  World:World,
  AboutWorld1:AboutWorld1,
  AboutWorld2:AboutWorld2,
  AboutWorld3:AboutWorld3,
  AboutWorld4:AboutWorld4,
  AboutWorld5:AboutWorld5,

  General:General, 
  AboutGeneral1:AboutGeneral1,
  AboutGeneral2:AboutGeneral2,
  AboutGeneral3:AboutGeneral3,
  AboutGeneral4:AboutGeneral4,
  AboutGeneral5:AboutGeneral5,

})

const AppContainer = createAppContainer(AppNavigator)