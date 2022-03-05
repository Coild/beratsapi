import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native'

const Splash = ({ navigation }) => {
    
    useEffect(() => {
        setTimeout( () => {
            navigation.replace('Home')
        }, 3000)
    }, []);

    return (
       <View  style={styles.background}>
           <Image source={require('./images/logo.png')} style={styles.logo} />
           <Text style={styles.title}> EasyCow</Text>
       </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        marginTop: -50,
        width: 225,
        height: 225
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'black'
    }
})