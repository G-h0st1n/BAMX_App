import {useState} from 'react';
import { Alert } from 'react-native';
import {Text, View, Button, Image, TextInput, Pressable,ImageBackground} from 'react-native';

var s = require('../styles/Signup')

import { auth } from '../App';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../App';
import { collection, addDoc } from 'firebase/firestore';

export default function Signup({navigation}: any){
    const[email,setEmail] = useState("");
    const[contraseña, setContraseña] = useState("");
    const[name,setName] = useState("");
    const[apellido, setApellido] = useState("");
    const[user, setUser] = useState("");

    return(
        <View style={s.container}>
            <ImageBackground
                source={require('../assets/signup_bg.png')}
                style={s.bg}
            >
            
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

                    <Text style={s.headerText}> CREAR CUENTA </Text>
                    <View style={s.backdrop_container}>
                        <Text style={s.optionText}>Nombre</Text>
                        <TextInput 
                            placeholder='Nombre'
                            style = {s.forumText}
                            onChangeText={text=>{
                                setName(text);
                        }}/>
                        <Text style={s.optionText}>Apellido</Text>
                        <TextInput 
                            placeholder='Apellido'
                            style = {s.forumText}
                            onChangeText={text=>{
                                setApellido(text);
                        }}/>
                        <Text style={s.optionText}>Correo</Text>
                        <TextInput 
                            placeholder='Correo'
                            style = {s.forumText}
                            onChangeText={text=>{
                                setEmail(text);
                        }}/>
                        <Text style={s.optionText}>Usuario</Text>
                        <TextInput 
                            placeholder='Usuario'
                            style = {s.forumText}
                            onChangeText={text=>{
                                setUser(text);
                        }}/>
                        <Text style={s.optionText}>Contraseña</Text>
                        <TextInput 
                            placeholder='Contraseña'
                            style = {s.forumText}
                            onChangeText={text=>{
                                setContraseña(text);
                        }}/>
                        <View style={s.button_container}>
                            <Button
                                title='Registrarse'
                                onPress={async () => {
                                    if (!email || !contraseña || !name || !apellido || !user) {
                                        Alert.alert("Please complete all fields correctly.");
                                        return;
                                    }

                                    try {
                                        const userCredential = await createUserWithEmailAndPassword(auth, email, contraseña);
                                        const userId = userCredential.user.uid;

                                        await addDoc(collection(db, 'users'), {
                                            uid: userId,
                                            nombre: name,
                                            apellido: apellido,
                                            correo: email,
                                            usuario: user,
                                        });

                                        Alert.alert("User created correctly! Please sign in...");
                                        navigation.navigate("Login");
                                    } catch (error: any) {
                                        console.error("Signup error:", error);
                                        Alert.alert("Please complete all fields correctly.");
                                    }
                                }}
                                color='#5BB02F'
                            />
                        </View>
                    </View>
            </ImageBackground>
        </View>
    )
}

