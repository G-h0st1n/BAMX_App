import {useState} from 'react';
import {Text, View, Button, Image, TextInput, Pressable} from 'react-native';

var s=require('../styles/Login')

export default function Login({navigation}: any){
    const[email,setEmail] = useState("");
    const[contraseña, setContraseña] = useState("");

    return(
        <View style={s.container}>
        <Pressable 
            onPress = {() => {
                navigation.navigate("LogSign")
            }}
        >
            <Image
                source={require('../assets/goBack.png')}
                style={s.goBackImg}
            />
        </Pressable>

            <Text style={s.headerText}> INICIAR SESION </Text>
            <View style={s.backdrop_container}>
                <Text style={s.optionText}>Correo</Text>
                <TextInput 
                    placeholder='Correo'
                    style = {s.forumText}
                    onChangeText={text=>{
                    setEmail(text);
                    }}
                />

                <Text style={s.optionText}>Contraseña</Text>
                <TextInput 
                    placeholder='Contraseña'
                    style = {s.forumText}
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
            <View style={s.footer_container}>
                <Image
                    source={require('../assets/bottomLN.png')}
                    style={s.imageFit}
                />
            </View>
        </View>
    )
}
