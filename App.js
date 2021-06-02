import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TransactionScreen from './screens/BookTransactionScreen';
import SearchScreen from './screens/SearchScreen';
import TransactionScreen from './screens/HomeDecorTransactionScreen';
import TransactionScreen from './screens/CoolDrinksTransactionScreen';
import TransactionScreen from './screens/ClothesTransactionScreen';
import TransactionScreen from './screens/CeramicsTransactionScreen';
import TransactionScreen from './screens/ElectronicsTransactionScreen';
import TransactionScreen from './screens/MedicalItemsTransactionScreen';
import TransactionScreen from './screens/PlantsTransactionScreen';
import TransactionScreen from './screens/PlasticProductsTransactionScreen';
import TransactionScreen from './screens/StationariesTransactionScreen';
import TransactionScreen from './screens/ToysTransactionScreen';


export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen: SearchScreen},
});

const AppContainer =  createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
