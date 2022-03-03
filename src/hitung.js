import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    View,
} from 'react-native';

import tabel from './tabel';

class Hitung extends Component {
    state = {
        gender: 'jantan',
        berat: 0,
        hasil : ''
    }
    updateGender = (gender) => {
        this.setState({ gender: gender })
    }

    getHasil = () => {
        // console.log("hasil "+new Number(this.state.berat)+" state : "+this.state.berat);
        if(this.state.gender==="jantan"){
            if (this.state.berat<90 || this.state.berat>199){
                this.setState({hasil:"Tidak ditemukan"})
            }else {
                this.setState({hasil:tabel.tabelJantan.get(this.state.berat).toString()+' Kg'});
            }
            
        } else {
            if (this.state.berat<90 || this.state.berat>199){
                this.setState({hasil:"Tidak ditemukan"})
            }else {
                this.setState({hasil:tabel.tabelBetina.get(this.state.berat).toString()+' Kg'});
            }
        }
    }
    render() {
        return (
            <View style={[styles.MainContainer]}>
                <Image source={require('./images/logo.png')} style={[styles.logo]} />
                <View style={{
                    height: "10%",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={{ fontSize: 18 }}>Hasil</Text>
                    <Text style={{ fontSize: 25 }}>{this.state.hasil}</Text>
                </View>

                <View style={{ borderBottomColor: 'black', borderBottomWidth: 5, width: '90%', marginTop: 25 }}></View>
                <View style={styles.textInputContainer}>

                    <Text style={[styles.inputtitle]}>Masukan Lingkar Dada Sapi</Text>
                    <TextInput keyboardType = 'numeric' onChangeText={(x) => { this.setState({berat:parseInt(x)})  }} 
                        style={[styles.textInputStyle,{textAlign:'center'}]} 

                    />
                    <Text style={[styles.inputtitle]}>Pilih Gender</Text>
                    <View style={{ width: '80%', height: 50, borderBottomWidth: 1, paddingBottom: -10 }}>
                        <Picker selectedValue={this.state.gender} onValueChange={this.updateGender}>
                            <Picker.Item label="Jantan" value="jantan" />
                            <Picker.Item label="Betina" value="betina" />
                        </Picker>

                    </View>

                </View>

                <TouchableOpacity style={[styles.button]} onPress={this.getHasil}>
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
            width: 100,
            height: 100,
            marginTop: 75,
            marginBottom: 15,
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