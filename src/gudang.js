
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
    constructor(props) {
        super(props);
        this.state = {

        }
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


                        <Text style={{ paddingTop: 50,
                            fontSize: 32 }}>
                            Segere Hadir
                        </Text>
                        <View style={[{ 
                            marginTop: 359,
                            paddingBottom: 25
                        }]}>
                            <Text style={{ fontSize: 15 }}>  Fakultas Peternakan Univversitas Mataram</Text>
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
            fontFamily: 'poppins',
            color: 'black',
            fontSize: 25,
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 25
        },
    });

export default Gudang;