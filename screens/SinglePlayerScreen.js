import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar, ImageBackground, ScrollView } from "react-native";
import TopLogoSmall from '../components/TopLogoSmall';
import Layout from '../constants/Layout';
import constantStyles from '../constants/styles'

class SinglePlayerScreen extends Component {

      static navigationOptions = {
        title: ' ',
        headerTintColor: '#FFF',
        headerTransparent: true
    };

  render() {
    const { player } = this.props.navigation.state.params;
    return (
        <ScrollView style={styles.container}>
        <StatusBar
         backgroundColor="#000"
         barStyle="light-content"
       />
       <TopLogoSmall/>
      <View style={styles.imgContainer} contentContainerStyle={styles.contentContainer}>
        <ImageBackground
            source={{uri: player.PictureUrl}}
            // onLoadEnd={()=> { this.setState({ loading: false })}}
            style={styles.container}
            imageStyle={{resizeMode: 'contain'}}
        />
        </View>
        <View style={styles.textCont}>
            <Text style={styles.titleName}>{player.FirstName}</Text>
            <Text style={styles.titleName}>{player.LastName}</Text>
        </View>
        <View style={[styles.descCont, constantStyles.grid]}>
            <View style={[constantStyles.row, styles.textRow]}>
                <View style={constantStyles.col}>
                    <Text style={styles.heading}>Sisäpeli:</Text>
                    <Text style={styles.title}>{player.CategoryId}</Text>
                </View>
                <View style={constantStyles.col}>
                    <Text style={styles.heading}>Paino</Text>
                    <Text style={styles.title}>91kg</Text>
                </View>
            </View>
            <View style={[constantStyles.row, styles.textRow]}>
                <View style={constantStyles.col}>
                    <Text style={styles.heading}>Ulkopeli:</Text>
                    <Text style={styles.title}>Koppari</Text>

                </View>
                <View style={constantStyles.col}>
                    <Text style={styles.heading}>Pituus</Text>
                    <Text style={styles.title}>182cm</Text>
                </View>
            </View>
                <Text style={styles.heading}>Syntynyt</Text>
                <Text style={styles.title}>16/02/1986</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
    },
    imgContainer: {
        flexDirection: 'column',
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderRadius: 50,
        width: Layout.window.width*1.5,
        minHeight: 200,
        marginLeft: -Layout.window.width*0.2,
        shadowColor: "#000",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: 5,
          width: 0
        },
    },
    textRow: {
        marginBottom: 12,
        alignItems: 'stretch'
    },
    descCont: {
        marginHorizontal: 16,
        marginVertical: 16
    },
    titleName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
      },
      heading: {
        fontSize: 18,
        color: '#BABABA',
      },
      description: {
        fontSize: 14,
        color: '#FFF',
        fontWeight: 'bold',
      },
    textCont: {
        position: 'absolute',
        zIndex: 10,
        left: '50%',
        top: '20%'
      },
  });

export default SinglePlayerScreen;