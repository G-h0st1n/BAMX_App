import {use, useState} from 'react';
import {Text, View, Button, Image} from 'react-native';

export default function LogSign({navigation}: any){
    return(
        <View>
            <Button
                title='Iniciar Sesion'
                onPress={() =>{
                    navigation.navigate("Login")
                } }
            />

            <Button
                title='Registrarse'
                onPress={() =>{
                    navigation.navigate("Signup")
                } }
            />
        </View>

    )
}
