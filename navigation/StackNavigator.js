import React from 'react';
import { createStackNavigator, TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import PlayersScreen from '../screens/PlayersScreen';
import SinglePlayerScreen from '../screens/SinglePlayerScreen';
import ShopScreen from '../screens/ShopScreen';
import AccountScreen from '../screens/AccountScreen'



export const HomeTab = createStackNavigator({
    HomeScreen: {
        screen: HomeScreen,
    }
});

export const PlayersTab = createStackNavigator({
    PlayersScreen: {
        screen: PlayersScreen,
    },
    SinglePlayerScreen: {
        screen: SinglePlayerScreen
    }
});

export const ShopTab = createStackNavigator({
    ShopScreen: {
        screen: ShopScreen,
    },
});

export const AccountTab = createStackNavigator({
    AccountScreen: {
        screen: AccountScreen,
    },
});
