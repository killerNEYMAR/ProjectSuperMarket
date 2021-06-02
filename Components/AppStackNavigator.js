import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from '../screens/SearchScreen';
import Settingscreen  from '../screens/Settingscreen';




export const AppStackNavigator = createStackNavigator({
  BookDonateList : {
    screen : Settingscreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : SearchScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'Home'
  }
);
