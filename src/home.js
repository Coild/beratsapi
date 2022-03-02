
import React, { Component } from 'react';

import {
  BackHandler,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  Alert,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  backAction = () => {
    Alert.alert('perhatian', "Apakah anda ingin menutup  aplikasi?",
      [
        {
          text: "cancel",
          onPress: () => null,
          style: 'cancel'
        },
        {
          text: "yes",
          onPress: () => BackHandler.exitApp(),
        }
      ]);
    return true;
  }

  componentDidMount() {
    this.BackHandler = BackHandler.addEventListener(
      'hardwareBackpress',
      this.backAction,
    );
  }

  componentWillUnmount() {
    this.BackHandler.remove();
  }

  render() {
    return (
      <View style={[styles.MainContainer]}>

        <View style={[styles.logo]}>

        </View>

        <Text style={[styles.title]}>
          EasyCow
        </Text>

        <TouchableOpacity style={[styles.button]} onPress={() => this.props.navigation.navigate('Hitung')} >
          <Text style={{ fontSize: 20 }} >Hitung</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]} onPress={() => this.props.navigation.navigate('About')}>
          <Text style={{ fontSize: 20 }} >About us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]} onPress={() => {
          Alert.alert('perhatian', "Apakah anda ingin menutup  aplikasi?",
            [
              {
                text: "cancel",
                onPress: () => null,
                style: 'cancel'
              },
              {
                text: "yes",
                onPress: () => BackHandler.exitApp(),
              }
            ]);
        }}>
          <Text style={{ fontSize: 20 }} >Keluar</Text>
        </TouchableOpacity>

        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 30
        }}>
          <Text style={{ fontSize: 15 }}>  Fakultas Peternakan Univversitas Mataram</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create(
  {

    MainContainer: {

      flex: 1,
      backgroundColor: "#efffff",
      alignItems: 'center'

    },

    button: {
      fontFamily: 'arial',
      backgroundColor: "#FFB347",
      elevation: 7,
      marginTop: 25,
      width: '80%',
      height: 50,
      // paddingHorizontal:10,
      marginHorizontal: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
    },

    logo: {
      width: 150,
      height: 150,
      elevation: 5,
      marginTop: 75,
      marginBottom: -20,
      backgroundColor: 'black',
      marginHorizontal: 20
    },

    title: {
      fontFamily: 'poppins',
      color: 'black',
      fontSize: 28,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 25
    }
  });

export default Home;