import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator'
import CeramicsTransactionScreen  from '..screens/CeramicsTransactionScreen';
import ClothesTransactionScreen from '../screens/ClothesTransactionScreen';
import CoolDrinksTransactionScreen from '../screens/CoolDrinksTransactionScreen';
import ElectronicsTransactionScreen from '../screens/ElectronicsTransactionScreen';
import HomeDecorTransactionScreen from '../screens/HomeDecorTransactionScreen';
import StationariesTransactionScreen from '../screens/StationariesTransactionScreen';
import MedicalItemsTransactionScreen from '../screens/MedicalItemsTransactionScreen';
import PlantsTransactionScreen from '../screens/PlantsTransactionScreen';
import PlasticProductsTransactionScreen from '../screens/PlasticProductsTransactionScreen';
import SearchScreen from '../screens/HomeDecorTransactionScreen';
import ToysTransactionScreen from '../ToysTransactionScreen';

import {Icon} from 'react-native-elements';

export const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator,
    navigationOptions:{
      drawerIcon : <Icon name="home" type ="fontawesome5" />
    }
    },
  CoolDrinksTransaction: {
    screen : CoolDrinksTransactionScreen,
    navigationOptions:{
      drawerIcon : <Icon name="CoolDrinks" type ="font-awesome" />,
      drawerLabel : "CoolDrinks"
    }
  },
  ClothesTransaction : {
    screen : NotificationScreen,
    navigationOptions:{
      drawerIcon : <Icon name="Clothes" type ="font-awesome" />,
      drawerLabel : "Clothes"
    }
  },
 CeramicsTransaction:{
    screen: CeramicsTransactionScreen,
    navigationOptions:{
      drawerIcon : <Icon name="Ceramics" type ="font-awesome" />,
      drawerLabel : "Ceramics"
    }
  },
  Search : {
    screen : SearchScreen,
    navigationOptions:{
      drawerIcon : <Icon name="Search" type ="fontawesome5" />,
      drawerLabel : "Search"
  }
},
ElectronicsTransaction:{
    screen: ElectronicsTransactionScreen,
    navigationOptions:{
      drawerIcon : <Icon name="Electronics" type ="font-awesome" />,
      drawerLabel : "Electronics"
    }
  },
  HomeDecorsTransaction:{
    screen: CeramicsTransactionScreen,
    navigationOptions:{
      drawerIcon : <Icon name="HomeDecor" type ="font-awesome" />,
      drawerLabel : "HomeDecor"
    }
  },
  MedicalItemsTransaction:{
    screen: MedicalItemsTransactionScreen,
    navigationOptions:{
      drawerIcon : <Icon name="Medical" type ="font-awesome" />,
      drawerLabel : "Medicines"
    }
  },
  PlantsTransaction:{
    screen: PlanntsTransactionScreen,
    navigationOptions:{
      drawerIcon : <Icon name="Plants" type ="font-awesome" />,
      drawerLabel : "Plants"
    }
  },
  PlasticProductsTransaction:{
    screen: PlasticProductsTransactionScreen,
    navigationOptions:{
      drawerIcon : <Icon name="Plastic" type ="font-awesome" />,
      drawerLabel : "Plastic"
    }
  },
  StationariesTransaction:{
    screen: CeramicsTransactionScreen,
    navigationOptions:{
      drawerIcon : <Icon name="Stationaries" type ="font-awesome" />,
      drawerLabel : "Stationaries"
    }
  },
  ToysTransaction:{
    screen: ToysTransactionScreen,
    navigationOptions:{
      drawerIcon : <Icon name="Toys" type ="font-awesome" />,
      drawerLabel : "Toys"
    }
    }
  },
  {
    contentComponent:CustomSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })
