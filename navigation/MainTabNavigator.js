import React from 'react';
import { Platform, Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import PlayersScreen from '../screens/PlayersScreen';
import ShopScreen from '../screens/ShopScreen';

import { HomeTab, PlayersTab, ShopTab, AccountTab } from './StackNavigator';


HomeTab.navigationOptions = {
  tabBarLabel: 'Uutiset',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon
    //   focused={focused}
    //   name={
    //     Platform.OS === 'ios'
    //       ? `ios-information-circle${focused ? '' : '-outline'}`
    //       : 'md-information-circle'
    //   }
    // />
    <Image source={require('../assets/icons/uutiset.png')} style={{width: 32, height: 32}}/>
  ),
};


PlayersTab.navigationOptions = {
  tabBarLabel: 'Joukke',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon
    //   focused={focused}
    //   name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-link'}
    // />
    <Image source={require('../assets/icons/joukke.png')} style={{width: 32, height: 32}}/>
  ),
};


ShopTab.navigationOptions = {
  tabBarLabel: 'Kauppa',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon
    //   focused={focused}
    //   name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    // />
    <Image source={require('../assets/icons/kauppa.png')} style={{width: 26, height: 26}}/>
  ),
};

AccountTab.navigationOptions = {
  tabBarLabel: 'Tilli',
  tabBarIcon: ({ focused }) => (
    // <TabBarIcon
    //   focused={focused}
    //   name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    // />
    <Image source={require('../assets/icons/tilli.png')} style={{width: 32, height: 32}}/>
  ),
};

export default createBottomTabNavigator({
  HomeTab,
  PlayersTab,
  ShopTab,
  AccountTab
}, {
  tabBarOptions: {
    activeTintColor: '#c42b2b',
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#000',
    },
  }
});
