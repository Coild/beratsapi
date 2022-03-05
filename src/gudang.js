
import React, { Component } from 'react';

import {
    BackHandler,
    StyleSheet,
    Text,
    Image,
    View,
    SafeAreaView, ScrollView,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Gudang extends Component {
    backAction = () => {
        this.props.navigation.navigate("Home")
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
            <SafeAreaView>
                <ScrollView >
                    <View style={[styles.MainContainer]}>
                        <Image source={require('./images/logo.png')} style={[styles.logo]} />

                        <Text style={[styles.title]}>
                            Gudang
                        </Text>


                        <Text style={{fontFamily: 'Poppins-Regular', marginTop:150, color: 'black',
                            fontSize: 18 }}>
                            Segera Hadir
                        </Text>
                        <View style={[{ 
                            marginTop: 239,
                            paddingBottom: 25
                        }]}>
                             <Text style={{fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'center' }}>  Didukung oleh SPR Ridho Ilahi dan Fakultas Peternakan Universitas Mataram</Text>
                        </View>

                    </View>

                </ScrollView>

            </SafeAreaView>

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

        logo: {
            width: 100,
            height: 100,
            marginTop: 75,
            marginBottom: -20,
            backgroundColor: 'rgba(52, 52, 52, 0)',
            marginHorizontal: 20
        },
        title: {
            fontFamily: 'Poppins-Regular',
            color: 'black',
            fontSize: 25,
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 25
        },
    });

export default Gudang;