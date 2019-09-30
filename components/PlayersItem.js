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

import { Card, ListItem, Button } from 'react-native-elements'

export default function PlayersItem({ firstName, lastName, position, sponsor, picture, item, onPress }) {
  return (

    <View>
    <TouchableOpacity style={styles.imgContainer} onPress={() => onPress(item)}>
    <View>
    <View style={styles.textCont}>
    <Text style={styles.title}>{firstName} {lastName}</Text>
    <Text style={styles.heading}>Sisäpeli:</Text><Text style={styles.description}>{position}</Text>
    <Text style={styles.heading}>Kummiyritys:</Text><Text style={styles.description}>{sponsor}</Text>
    </View>
    <ImageBackground
    source={{uri: picture}}
    // onLoadEnd={()=> { this.setState({ loading: false })}}
    style={styles.container}
    imageStyle={{resizeMode: 'contain'}}
    >
      {/* <Text style={styles.title}>{firstName}</Text>
      <Text style={styles.title}>{lastName}</Text>
      <Text style={styles.title}>{sponsor}</Text> */}
      </ImageBackground>
    </View>
    </TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  imgContainer: {
    marginHorizontal: 4,
    marginVertical: 4,
    alignSelf: 'center',
    borderRadius: 100,
    backgroundColor: 'transparent'
  },
  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 50,
    paddingHorizontal: 14,
    width: 300,
    minHeight: 120,
    paddingVertical: 16,
    marginVertical: 1,
    shadowColor: "#fff",
    shadowOpacity: 0.5,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0
    },
  },
  textCont: {
    position: 'absolute',
    zIndex: 10,
    left: '50%',
    top: '10%'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  heading: {
    fontSize: 12,
    color: '#BABABA',
  },
  description: {
    fontSize: 14,
    color: '#FFF',
    fontWeight: 'bold',
  },
  date: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: 'bold'
  },
});
