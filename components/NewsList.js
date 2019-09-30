import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Keyboard, Linking } from "react-native";

import NewsItem from './NewsItem'

class NewsList extends Component {

    constructor(props) {
    super(props);
    this.state = {
       news: null,
       loaded: false,
       wpNews: []
    }
}

  componentDidMount() {
    fetch('http://www.fit-technology.fi/wp-json/wp/v2/posts?_embed')
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
           wpNews: responseData,
           loaded: true
        });
      })
      .done();
      };

    
  render() {
    return (
        <View>
        {this.state.loaded ? 
        <FlatList
          data={this.state.wpNews}
          renderItem={({item}) => {
            handleClick = () => {
                const url = item.link
                Linking.canOpenURL(url).then(supported => {
                 if (supported) {
                Linking.openURL(url);
                } else {
              console.log('Don\'t know how to open URI: ' + url);
               }
              });
              };
            //   media_details.sizes.medium.source_url
                return (
                    <NewsItem
                        image={item._embedded['wp:featuredmedia']}
                        title={item.title.rendered}
                        description={item.content.rendered.replace(/(<([^>]+)>)/ig,"")}
                        onPress={handleClick}
                        date={item.date}
                        author={item.author.name}
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

export default NewsList;

