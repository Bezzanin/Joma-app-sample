import React from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar } from 'react-native';
import TopLogo from '../components/TopLogo';
import GamesList from '../components/GamesList';
import ProductList from '../components/ProductList';

export default class ShopScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    
        return (
          <View style={styles.container}>
            <StatusBar
             backgroundColor="#000"
             barStyle="light-content"
           />
           <TopLogo />
          <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Liput:</Text>
            <GamesList />
            <Text style={styles.title}>Tuotteita:</Text>
            <ProductList />
          </ScrollView>
          </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 28,
        marginLeft: 16,
        marginVertical: 8,
        fontWeight: 'bold',
        color: '#000',
      },
    });
    
