import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  View
} from 'react-native';

import moment from 'moment';
import constantStyles from '../constants/styles';

export default function ProductItem({ picture, name, price, description, onPress }) {
  console.log(picture)
  return (

    <TouchableOpacity style={styles.imgContainer} onPress={onPress}>
    <ImageBackground
    source={{uri: picture}}
    // source={{uri: 'https://fit-technology.fi/wp-content/uploads/2018/09/product1.jpg'}}
    // onLoadEnd={()=> { this.setState({ loading: false })}}
    style={styles.container}
    imageStyle={{resizeMode: 'contain'}}
    >
      <View style={styles.productText}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.title}>{price}.00 €</Text>
      </View>
      </ImageBackground>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  imgContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 20,
    // paddingHorizontal: 14,
    width: 150,
    height: 225,
    // paddingVertical: 16,
    marginVertical: 1,
    // shadowColor: "#3076F0",
    // shadowOpacity: 0.5,
    // shadowRadius: 7,
    // shadowOffset: {
    //   height: 3,
    //   width: 0
    // },
   
    zIndex: 11
  },
  productText: {
    backgroundColor: '#222222',
    width: 150,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    minHeight: 50,
    justifyContent: 'center'
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 0,
    marginLeft: 0,
    textAlign: 'center'
  },

  description: {
    fontSize: 12,
    marginVertical: 16,
    color: '#FFF',
    margin: 2,
    textAlign: 'center'
  },
  date: {
    fontSize: 12,
    color: '#FFF',
    margin: 2,
    fontWeight: 'bold'
  },
});
