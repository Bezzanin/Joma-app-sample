import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  TextInput
} from 'react-native';
import { WebBrowser } from 'expo';
import Card from '../components/Card';
import TopLogo from '../components/TopLogo';
import { Button } from 'react-native-elements';
import fireFunctions from '../api/fireFunctions';

export default class AccountScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.registerUser = this.registerUser.bind(this)
    this.state = {
       text: null
    }
}
 registerUser() {
  fireFunctions.registerUserPhone('+358123456789', (confirmation) => {
    console.log(confirmation)
  })
 }

  render() {
    return (
      <View style={styles.container}>
         <StatusBar
          backgroundColor="#000"
          barStyle="light-content"
        />
        <TopLogo />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <Text style={styles.title}>Kirjaudu / Liity jäseneksi</Text>
            <Text style={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            <Text style={styles.title}>Anna puhelinnumerosi</Text>
            <TextInput
            style={styles.inputBox}
            onChangeText={(text) => this.setState({text})}
            placeholder='Puhelin Numero'
            keyboardType='numeric'
            />
            <Text style={styles.example}>Esim. +358 123456789</Text>
            <Button
            backgroundColor={'#c42b2b'}
            title='Seurava'
            onPress={() => {this.registerUser()}} />
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
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 8,
    marginLeft: 0,
    textAlign: 'center'
  },
  inputBox: {
      marginHorizontal: 16,
      height: 40, 
      borderColor: 'gray',
      padding: 8,
      marginVertical: 8,
      borderWidth: 1
  },
  description: {
    fontSize: 14,
    marginVertical: 16,
    color: '#000',
    margin: 2,
    textAlign: 'center'
  },
  example: {
    fontSize: 12,
    marginBottom: 8,
    color: 'grey',
    margin: 2,
    textAlign: 'center'
  },
});
