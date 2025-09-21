import {use, useState} from 'react';
import {Text, View, Button, Image, TextInput} from 'react-native';

export default function Login(){
    return(
        <View>
            <h1> INICIAR SESION </h1>
            <form>
                <Text>Correo</Text>
                <TextInput placeholder="Ingrese su correo"/>

                <Text>Contraseña</Text>
                <TextInput placeholder="Ingrese su contraseña"/> 
            </form>

            <Button
                title='Registrarse'
                onPress={() =>{} }
            />

        </View>

    )
}
