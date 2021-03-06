import React, { Component } from 'react';
import { Picker } from '@react-native-picker/picker';
import {
    BackHandler,
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
        jenis: 'bali',
        berat: 0,
        hasil: ''
    }
    updateGender = (gender) => {
        this.setState({ gender: gender })
    }

    updateJJenis = (jenis) => {
        this.setState({ jenis: jenis })
    }

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

    getHasil = () => {
        // console.log("hasil "+new Number(this.state.berat)+" state : "+this.state.berat);
        if (this.state.gender === "jantan") {
            if (this.state.jenis === "bali") {
                if (this.state.berat < 90 || this.state.berat > 199) {
                    this.setState({ hasil: "Tidak ditemukan" })
                } else {
                    this.setState({ hasil: tabel.tabelJantan.get(this.state.berat).toString() + ' Kg' });
                }
            } else {
                this.setState({hasil : (5.8*this.state.berat-675.47).toFixed(2)})
            }
        } else {
            if (this.state.jenis === "bali") {
                if (this.state.berat < 90 || this.state.berat > 199) {
                    this.setState({ hasil: "Tidak ditemukan" })
                } else {
                    this.setState({ hasil: tabel.tabelJantan.get(this.state.berat).toString() + ' Kg' });
                }
            } else {
                this.setState({hasil : 3.74*this.state.berat-312.69})
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
                    <Text style={{ fontFamily: 'Poppins-Regular', color: 'black', fontSize: 18 }}>Hasil</Text>
                    <Text style={{ fontFamily: 'Poppins-Regular', color: 'black', fontSize: 25 }}>{this.state.hasil}</Text>
                </View>

                <View style={{ borderBottomColor: 'black', borderBottomWidth: 5, width: '90%', marginTop: 0 }}></View>
                <View style={styles.textInputContainer}>

                    <Text style={[styles.inputtitle]}>Masukkan Lingkar Dada Sapi (CM)</Text>
                    <TextInput style={[styles.textInputStyle, { paddingLeft: 17, textAlign: 'left' }]} keyboardType='numeric' onChangeText={(x) => { this.setState({ berat: parseInt(x) }) }}
                    />
                    
                    <Text style={[styles.inputtitle]}>Pilih Jenis Sapi</Text>
                    <View style={{ width: '80%', height: 50, borderBottomWidth: 1, paddingBottom: -10 }}>
                        <Picker selectedValue={this.state.jenis} onValueChange={this.updateJJenis}>
                            <Picker.Item style={styles.inputtitle} label="bali" value="bali" />
                            <Picker.Item style={styles.inputtitle} label="simental" value="simental" />
                            <Picker.Item style={styles.inputtitle} label="limosin" value="limosin" />
                            <Picker.Item style={styles.inputtitle} label="brangus" value="brangus" />
                            <Picker.Item style={styles.inputtitle} label="brahman" value="brahman" />
                        </Picker>

                    </View>
                    
                    <Text style={[styles.inputtitle,{marginTop:10}]}>Pilih Gender</Text>
                    <View style={{ width: '80%', height: 50,  borderBottomWidth: 1, paddingBottom: -10 }}>
                        <Picker selectedValue={this.state.gender} onValueChange={this.updateGender}>
                            <Picker.Item style={styles.inputtitle} label="Jantan" value="jantan" />
                            <Picker.Item style={styles.inputtitle} label="Betina" value="betina" />
                        </Picker>

                    </View>

                </View>

                <TouchableOpacity style={[styles.button]} onPress={this.getHasil}>
                    <Text>Hitung</Text>
                </TouchableOpacity>

                <View style={{
                    flex: 1,
                    marginHorizontal: '10%',
                    justifyContent: 'flex-end',
                    marginBottom: 30
                }}>
                    <Text style={{ fontFamily: 'Poppins-Regular', fontSize: 12, textAlign: 'center' }}>  Didukung oleh SPR Ridho Ilahi dan Fakultas Peternakan Universitas Mataram</Text>
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
            fontFamily: 'Poppins-Regular',
            color: 'black',
            fontSize: 25,
            textAlign: 'center',
            marginTop: 20,
            marginBottom: 25
        },

        inputtitle: {
            fontFamily: 'Poppins-Regular',
            color: 'black',
            fontSize: 18,
        },

        textInputStyle: {
            borderBottomColor: "black",
            fontFamily: 'Poppins-Regular',
            width: '80%',
            color: 'black',
            height: 50,
            fontSize: 16,
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