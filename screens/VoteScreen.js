import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar
} from 'react-native';
import { WebBrowser } from 'expo';
import Card from '../components/Card';
import TopLogo from '../components/TopLogo';
import NewsList from '../components/NewsList';

export default class VoteScreen extends React.Component {
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
        {/* Games List Feature, currently inactive
        <GamesList /> */}
        <NewsList />
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
