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

export default function GamesItem({ date, time, homeTeam, guestTeam, city, onPress }) {
  return (

    <TouchableOpacity style={styles.imgContainer} onPress={onPress}>
    <ImageBackground
    source={require('../assets/images/cardBG.png')}
    // onLoadEnd={()=> { this.setState({ loading: false })}}
    style={styles.container}
    imageStyle={{resizeMode: 'contain'}}
    >
      <Text style={styles.title}>{date}</Text>
      <Text style={styles.title}>{time}</Text>
      {/*<Image source={{uri: image}} style={{flex: 1, resizeMode: 'cover'}}></Image>*/}
      <View style={[constantStyles.row, {justifyContent: 'space-around'}]}>
      <View style={[constantStyles.col2, styles.team, {justifyContent: 'flex-end'}]}>
        <Text style={styles.description}>{homeTeam}</Text>
        <Image style={{height: 25, width: 25, resizeMode: 'contain'}} source={{uri: "https://fit-technology.fi/wp-content/uploads/2018/09/joma-min.png"}} />
      </View>
      <View style={[constantStyles.col, {width: 30}]}><Text style={styles.description}>vs</Text></View>
      <View style={[constantStyles.col2, styles.team]}>
      <Image style={{marginHorizontal: 4, height: 25, width: 25, resizeMode: 'contain'}} source={{uri: "https://fit-technology.fi/wp-content/uploads/2018/09/hp-min.png"}} />
        <Text style={styles.description}>{guestTeam}</Text>
      </View>
      </View>
      <Text style={styles.title}>{city}</Text>
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
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    borderWidth: 0,
    borderRadius: 10,
    paddingHorizontal: 14,
    width: 240,
    minHeight: 100,
    paddingVertical: 16,
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
  team: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center'
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
