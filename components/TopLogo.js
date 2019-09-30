import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

import constantStyles from '../constants/styles'
import Layout from '../constants/Layout'

class TopLogo extends Component {
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
      maxHeight: 80,
      resizeMode: 'contain',
   },
   container: {
    height: 100,
    width: Layout.window.width,
    backgroundColor: '#000000'
   }
       
  });

export default TopLogo;