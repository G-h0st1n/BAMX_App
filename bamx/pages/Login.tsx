import {useState} from 'react';
import {Text, View, Button, Image, TextInput} from 'react-native';

var s=require('../styles/Login')

export default function Login({navigation}: any){
    const[email,setEmail] = useState("");
    const[contraseña, setContraseña] = useState("");

    return(
        <View>
            <Text> INICIAR SESION </Text>
            <Text>CORREO</Text>
            <TextInput 
                placeholder='Correo'
                onChangeText={text=>{
                setEmail(text);
                }}
            />

            <Text>Contraseña</Text>
            <TextInput 
                placeholder='Contraseña'
                secureTextEntry={true}
                onChangeText={text=>{
                setContraseña(text);
                }}
            />

            <Button
                title='Registrarse'
                onPress={() =>{
                    navigation.navigate("Userpage")
                } }
            />

        </View>

    )
}
