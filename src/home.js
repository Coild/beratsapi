
import React, { Component } from 'react';
import {
  BackHandler,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  Image,
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

        <Image source={require('./images/logo.png')} style={[styles.logo]}/> 


        <Text style={[styles.title]}>
          EasyCow
        </Text>

        <TouchableOpacity style={[styles.button]} onPress={() => this.props.navigation.navigate('Hitung')} >
          <Text style={{fontFamily: 'Poppins-Light', color: 'black', fontSize: 14 }} >Hitung</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]} onPress={() => this.props.navigation.navigate('Konsul')}>
          <Text style={{ fontFamily: 'Poppins-Light', color: 'black', fontSize: 14, textAlign:'center'}} >Klinik Konsultasi Kesehatan Ternak</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]} onPress={() => this.props.navigation.navigate('Gudang')}>
          <Text style={{fontFamily: 'Poppins-Light', color: 'black', fontSize: 14 }} >Gudang Ilmu Ternak</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]} onPress={() => this.props.navigation.navigate('About')}>
          <Text style={{fontFamily: 'Poppins-Light', color: 'black', fontSize: 14 }} >Tentang Kami</Text>
        </TouchableOpacity>

        

        <View style={{
          flex: 1,
          marginHorizontal: '10%',
          justifyContent: 'flex-end',
          marginBottom: 30
        }}>
          <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'center' }}>  Didukung oleh SPR Ridho Ilahi dan Fakultas Peternakan Universitas Mataram</Text>
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
      backgroundColor: "#FFB347",
      elevation: 7,
      marginTop: 25,
      width: '80%',
      height: 55,
      paddingHorizontal:10,
      paddingVertical: 7,
      marginHorizontal: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10
    },

    logo: {
      width: 125,
      height: 125,
      marginTop: 75,
      marginBottom: -20,
      backgroundColor: 'rgba(52, 52, 52, 0)',
      marginHorizontal: 20
    },

    title: {
      fontFamily: 'Poppins-Regular',
      color: 'black',
      fontSize: 28,
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 25
    }
  });

export default Home;