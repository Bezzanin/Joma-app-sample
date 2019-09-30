import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import constantStyles from '../constants/styles'
import Layout from '../constants/Layout'

class TopLogoSmall extends Component {
  render() {
    return (
        <View style={[constantStyles.centered, styles.container]}>
        <Image 
        source={require('../assets/images/JoMa-Logo.png')} 
        style={styles.logo}/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
    logo: {
      flex: 1,
      width: 100,
      maxHeight: 40,
      resizeMode: 'contain',
      marginBottom: 6
   },
   container: {
    height: 70,
    width: Layout.window.width,
    backgroundColor: '#000000'
   }
       
  });

export default TopLogoSmall;