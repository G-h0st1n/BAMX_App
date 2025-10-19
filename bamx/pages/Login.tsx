import {useState} from 'react';
import { Alert } from 'react-native';
import {Text, View, Button, Image, TextInput, Pressable, ImageBackground} from 'react-native';
import { auth } from '../App';
import { signInWithEmailAndPassword } from 'firebase/auth';

var s=require('../styles/Login')

export default function Login({navigation}: any){
    const[email,setEmail] = useState("");
    const[contraseña, setContraseña] = useState("");
    const [check1, setCheck1] = useState(false);

    return(
            <View style={s.container}>
                <ImageBackground
                    source={require('../assets/login_bg.png')}
                    style={s.bg}
                >
                    <Pressable 
                        onPress = {() => {
                            navigation.replace("Homepage")
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
                                    title='Iniciar sesión'
                                    onPress={async () => {
                                        if (!email || !contraseña) {
                                            Alert.alert("Please complete all fields correctly.");
                                            return;
                                        }

                                        try {
                                            await signInWithEmailAndPassword(auth, email, contraseña);
                                            Alert.alert("Signed in correctly");
                                            navigation.replace("Homepage");
                                        } catch (error: any) {
                                            console.error("Login error:", error);
                                            Alert.alert("Email or password incorrect");
                                        }
                                    }}
                                    color='#FFAF00'
                                />
                            </View>

                        </View>
                </ImageBackground>
            </View>
        )
}
