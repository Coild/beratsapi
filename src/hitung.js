import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    Touchable,
    TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

class Hitung extends Component {
    render() {
        return (
            <View style={[styles.MainContainer]}>
                <View style={[styles.logo]}>

                </View>

                <View style={{
                    height:"10%",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 18 }}>Hasil</Text>
                    <Text style={{ fontSize: 25 }}>0 Kg</Text>
                </View>

                <View style={{ borderBottomColor: 'black', borderBottomWidth: 5, width: '90%', marginTop: 25 }}></View>
                <View style={styles.textInputContainer}>

                    <Text style={[styles.inputtitle]}>Masukan Lingkar Dada Sapi</Text>
                    <TextInput
                        style={styles.textInputStyle}

                    />
                    <Text style={[styles.inputtitle]}>Masukan Lingkar Dada Sapi</Text>
                    <TextInput

                        style={styles.textInputStyle}
                    />
                </View>

                <TouchableOpacity style={[styles.button]}>
                    <Text>Hitung</Text>
                </TouchableOpacity>

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
            marginTop: 50,
            marginBottom: 15,
            backgroundColor: 'black',
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

        inputtitle: {
            fontSize: 18,
        },

        textInputStyle: {
            borderBottomColor: "black",
            width: '80%',
            height: 50,
            // paddingHorizontal:10,
            marginHorizontal: '10%',
            borderWidth: 1,
            borderTopWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            marginBottom: 20,
            paddingBottom: 10,
        },

        textInputContainer: {
            marginVertical: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            color: "red",
        },
    });


export default Hitung;