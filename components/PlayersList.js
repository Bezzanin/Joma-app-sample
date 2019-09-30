import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Keyboard, Linking } from "react-native";
import { withNavigation } from 'react-navigation';
import PlayersItem from './PlayersItem';
import players from '../constants/FakeData/players';

class PlayersList extends Component {

    constructor(props) {
    super(props);
    this.goTolink = this.goTolink.bind(this)
    this.state = {
       news: null,
       loaded: true,
       playersList: players
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
  goTolink = (item) => {
    console.log(item)
    this.props.navigation.navigate('SinglePlayerScreen', {
      player: item
    })
  };

  render() {
    return (
        <View>
        {this.state.loaded ? 
        <FlatList
          data={this.state.playersList}
          renderItem={({item}) => {
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
                    <PlayersItem
                        item={item}
                        firstName={item.FirstName}
                        lastName={item.LastName}
                        position={item.CategoryId}
                        sponsor={item.SponsorLogoName}
                        picture={item.PictureUrl}
                        onPress={this.goTolink}
                    />
                )
          }}
          keyExtractor={item => item.Id}
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

export default withNavigation(PlayersList);

