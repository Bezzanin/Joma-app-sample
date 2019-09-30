import React from 'react';
import { ScrollView, StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import PlayersList from '../components/PlayersList';
import NewsList from '../components/NewsList';
import TopLogo from '../components/TopLogo';



export default class PlayersScreen extends React.Component {
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
        <PlayersList />
      </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});
