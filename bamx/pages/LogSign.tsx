import {use, useState} from 'react';
import {StyleSheet, Text, View, Button, Image, Pressable} from 'react-native';

var s = require('../styles/LogSign');

export default function LogSign({navigation}: any){
    return(
        <View style={s.container} >

        <Pressable 
            onPress = {() => {
                navigation.navigate("Homepage")
            }}
        >
                <Image
                    source={require('../assets/goBack.png')}
                    style={s.goBackImg}
                />
        </Pressable>

            <Text style={s.headerText}>BIENVENIDOS A COLECTA+BAMX</Text>
            <View style={s.backdrop_container}>
                <View style={s.button_container}>
                    <Button 
                        title='Iniciar Sesion'
                        onPress={() =>{
                            navigation.navigate("Login")
                        } }
                        color="#FFAF00"
                        
                    />
                </View>
                <View style={s.button_container}>
                    <Button
                        title='Registrarse'
                        onPress={() =>{
                            navigation.navigate("Signup")
                        } }
                        color="#FFAF00"
                    />
                </View>
            </View>
            <View style={s.footer_container}>
                <Image
                    source={require('../assets/bottomLS.png')}
                    style={s.imageFit}
                />
            </View>
        </View>
    )
}
