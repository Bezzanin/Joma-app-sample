import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View
} from 'react-native';
import Layout from '../constants/Layout'
import { Card, ListItem, Button } from 'react-native-elements'

import moment from 'moment';

export default function NewsItem({ title, description, image, onPress, date, author }) {
  return (
    <View>
    <Card
      containerStyle={styles.container}
      image={{uri: image[0].source_url}}
      title={title}
      titleStyle={{fontWeight: 'bold', fontSize: 24, padding: 6, marginBottom: 0}}>
    <Text 
      numberOfLines={4}
      style={{fontSize: 14, lineHeight: 25, fontWeight: '300', padding: 6}}
      >{description}</Text>
    <TouchableOpacity  onPress={onPress}>
      <Text style={styles.day}>Read More</Text>
    </TouchableOpacity>
    <View style={styles.separator} />
    </Card>
    <View style={{height:20}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 0,
    borderRadius: 5,
    width: Layout.window.width*0.9,
    minHeight: 100,
    marginHorizontal: 15,
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      height: 2,
      width: 0
    },
    marginVertical: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: -4,
    marginLeft: 2,
  },

  description: {
    fontSize: 14,
    color: '#FFF',
    margin: 2,
  },
  date: {
    fontSize: 12,
    color: '#FFF',
    margin: 2,
    fontWeight: 'bold'
  },
});
