import "./../styles/Signup"
import {use, useState} from 'react';
import {Text, View, Button, Image, TextInput} from 'react-native';

export default function Signup(){
    return(
        <View>
            <h1> CREAR CUENTA </h1>
            <form>

                <Text>Nombre</Text>
                <TextInput placeholder="Ingrese su nombre"/>    

                <Text>Apellido</Text>
                <TextInput placeholder="Ingrese su apellido"/>

                <Text>Correo</Text>
                <TextInput placeholder="Ingrese su correo"/>    

                <Text>Usuario</Text>
                <TextInput placeholder="Ingrese su usuario"/>

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

