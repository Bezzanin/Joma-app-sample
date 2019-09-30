import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Keyboard, Linking } from "react-native";

import GamesItem from './GamesItem';
import games from '../constants/FakeData/games'

class GamesList extends Component {

    constructor(props) {
    super(props);
    this.state = {
       news: null,
       loaded: true,
       gamesList: games
    }
}

  // componentDidMount() {
  //   fetch('http://www.fit-technology.fi/wp-json/wp/v2/posts')
  //     .then((response) => response.json())
  //     .then((responseData) => {
  //       this.setState({
  //          wpNews: responseData,
  //          loaded: true
  //       });
  //     })
  //     .done();
  //     };

    
  render() {
    return (
        <View>
        {this.state.loaded ? 
        <FlatList
          horizontal={true}
          data={this.state.gamesList}
          renderItem={({item}) => {
            console.log(item)
            handleClick = () => {
                const url = item.url
                Linking.canOpenURL(url).then(supported => {
                 if (supported) {
                Linking.openURL(url);
                } else {
              console.log('Don\'t know how to open URI: ' + url);
               }
              });
              };
    
                return (
                    <GamesItem
                        time={item.time}
                        date={item.date}
                        homeTeam={item.homeTeam}
                        guestTeam={item.guestTeam}
                        city={item.city}
                    />
                )
          }}
          keyExtractor={item => item.id.toString()}
        /> : <View />}
        </View> 
    );
  }
}

const styles = StyleSheet.create({
   newsScroll: {
    backgroundColor: 'transparent',
  },
  });

export default GamesList;

