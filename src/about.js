
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

class About extends Component {
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
                            About Us
                        </Text>
                        <View style={[styles.box]}>
                            <Text style={[styles.about_text]}>
                                EasyCow merupakan aplikasi   penduga bobot badan sapi yang dapat digunakan oleh peternak untuk memperkirakan berat badan sapinya.
                            </Text>

                            <Text style={[styles.about_text]}>
                                Masyarakat dapat mengestimasi bobot badan sapi potong dengan memasukkan lingkar dada sapi pada aplikasi.
                            </Text>

                            <Text style={[styles.about_text]}>
                                Aplikasi ini sangat cocok digunakan untuk memprediksi Berat Badan Sapi Khususnya sapi asli Indonesia seperti sapi bali dan hasil silangannya dengan sapi eksotik lainnya seperti Simental x Bali (Simbal), Limosin x Bali (Limbal), Brahman x Bali (Brabal).
                            </Text>

                            <Text style={[styles.about_text]}>
                                Masyarakat juga bisa memanfaatkan aplikasi ini untuk konsultasi masalah Kesehatan Ternak dan menambah wawasan tentang Ilmu Peternakan
                            </Text>

                            <Text style={[styles.about_text], { marginTop: 15 }}>
                                Aplikasi ini dikembangkan oleh :
                            </Text>
                            <Text style={[styles.about_text]}>
                                - Tarmizi
                            </Text>
                            <Text style={[styles.about_text]}>
                                - Sukarne
                            </Text>

                            <Text style={{ marginTop: 15, textAlign: 'center' }}>

                                Masukan dan saran serta potensi kerjasama dapat menghunungi nomor 087763291665
                            </Text>
                        </View>



                        <View style={{
                            flex: 1,
                            marginTop: 25,
                            marginBottom: 30
                        }}>
                            <Text style={{ fontSize: 15 }}>  Fakultas Peternakan Universitas Mataram</Text>
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
        about_text: {
            fontSize: 15,
            marginBottom: 5,
            textAlign: 'justify',
        },
        logo: {
            width: 150,
            height: 150,
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
        box: {
            borderRadius: 7,
            borderColor: "#FFB347",
            borderWidth: 3,
            borderLeftWidth: 3,
            borderRightWidth: 3,
            borderTopWidth: 3,
            paddingTop: 15,
            paddingBottom: 15,
            paddingHorizontal: '5%',
            marginHorizontal: '5%'
        }
    });

export default About;