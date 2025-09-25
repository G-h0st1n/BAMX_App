import {useState} from 'react';
import {Text, View, Button, Image, TextInput} from 'react-native';

var s=require('../styles/Login')

export default function Login({navigation}: any){
    const[email,setEmail] = useState("");
    const[contraseña, setContraseña] = useState("");

    return(
        <View style={s.container}>
            <View style={s.backdrop_container}>
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

                <View style={s.button_container}>
                    <Button
                        title='Registrarse'
                        onPress={() =>{
                            navigation.navigate("Homepage")
                        } }
                        color='#FFAF00'
                    />
                </View>
            </View>
            <View >
                <Image
                    source={require('../assets/bottomLN.png')}
                />
            </View>
        </View>
    )
}
