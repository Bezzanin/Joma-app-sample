import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, Keyboard, Linking } from "react-native";

import ProductItem from './ProductItem';
import products from '../constants/FakeData/products'

class ProductList extends Component {

    constructor(props) {
    super(props);
    this.state = {
       news: null,
       loaded: true,
       ProductList: products
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
          data={this.state.ProductList}
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
                    <ProductItem
                        name={item.name}
                        price={item.price}
                        picture={item.picture}
                        description={item.description}
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

export default ProductList;

