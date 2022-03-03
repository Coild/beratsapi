
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

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <View style={[styles.MainContainer]}>

                <Image source={require('./images/logo.png')} style={[styles.logo]} />

                <Text style={[styles.title]}>
                    EasyCow
                </Text>

                <Text style={{
                    fontSize: 18,
                    borderRadius: 7,
                    borderColor: "#FFB347",
                    borderWidth: 3,
                    borderLeftWidth: 3,
                    borderRightWidth: 3,
                    borderTopWidth: 3,
                    paddingTop: 15,
                    textAlign: 'justify',
                    paddingHorizontal: '5%',
                    marginHorizontal: '5%'
                }}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Text>


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

export default About;