import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground } from "react-native";
import { Button } from 'react-native-elements';
import Layout from '../constants/Layout'
import { ScrollView } from "react-native-gesture-handler";


class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
    loading: true,
  }
  }
  render() {
    return (
        <ImageBackground
        source={require('../assets/images/cardBG.png')}
        onLoadEnd={()=> { this.setState({ loading: false })}}
        style={styles.container} 
        >
              <View>
              <Text style={styles.title}>Doyouwanttostartrightnow</Text>
              <Text style={styles.paragraph}>WePrepared
              </Text>
              <Button
              buttonStyle={styles.ActionButton}
              onPress={() => this.props.navigation.navigate('ProgramsScreen', {
                testText: 'My Test Text'
              })}
              title='ChooseProgram' />
            </View>
  {this.state.loading && <View style={styles.loading}>
              <ActivityIndicator
                  animating
                  size="large"
              />
          </View>}
          </ImageBackground>
    );
  }
  goToSomewhere = () => {
    this.props.navigator.push('programs');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Layout.window.width * 0.9,
    borderRadius: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 0
 },
  title: {
    marginVertical: 30,
    width: Layout.window.width * 0.9,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 24,
  },
  paragraph: {
    marginHorizontal: 50, 
    backgroundColor: 'transparent',
    width: Layout.window.width * 0.9,
    color: '#FFFFFF',
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 14,
    letterSpacing: 0,
    //lineHeight: 18,
    opacity: 0.8,
    textAlign: 'center'
  },
  header: {
    resizeMode: 'cover',
    width: Layout.window.width
  },
  ActionButton: {
      width: 200,
      borderRadius: 100,
      borderColor: '#FFFFFF',
      borderWidth: 1,
      alignSelf: 'center',
      marginTop: 30,
      backgroundColor: 'transparent'
  },
  loading: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,.2)"

    },
  
});

export default Card;


