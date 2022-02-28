
import React, {Component} from 'react';

import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
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

  render() {
    return (
      <View style={[styles.MainContainer]}>
        
        <View style={[ styles.logo]}>

        </View>
        
        <Text style={[styles.title]}>
          EasyCow
        </Text>

        <TouchableOpacity style={[styles.button]} onPress={() => this.props.navigation.navigate('Hitung')} >
          <Text style={{fontSize:20}} >Hitung</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]} >
          <Text style={{fontSize:20}} >About us</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button]} >
          <Text style={{fontSize:20}} >Keluar</Text>
        </TouchableOpacity>

        <View style={{
          flex:1,
          justifyContent:'flex-end',
          marginBottom:30}}>
          <Text style={{fontSize:15}}>  Fakultas Peternakan Univversitas Mataram</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create(
    {
      
      MainContainer: {
     
        flex: 1,
        backgroundColor:'#5eb7cf',
        alignItems:  'center'
     
      },
  
      button : {
        backgroundColor:"#a1e2d5",
            elevation:7,
            marginTop:25,
            width: '80%',
            height:50,          
            // paddingHorizontal:10,
            marginHorizontal:'10%',
            alignItems:'center',
            justifyContent:'center',
            borderRadius: 10
      },

      logo :  {
        width:150,
        height:150,
        elevation:5,
        marginTop:75,
        marginBottom: -20,
        backgroundColor:  'green',
        marginHorizontal:20
      },

      title : {
        fontFamily:'arial',
        color:'black',
        fontSize: 28,
        textAlign:'center',
        marginTop: 20,
        marginBottom:25 
      }
    });

    export default Home;  