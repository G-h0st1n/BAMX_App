import {useState} from 'react';
import { Alert } from 'react-native';
import { CheckBox, Icon } from '@rneui/themed';
import {Text, View, Button, Image, TextInput, Pressable,ImageBackground} from 'react-native';

var s = require('../styles/Signup')

import { auth } from '../App';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { db } from '../App';
import { collection, addDoc, setDoc, doc} from 'firebase/firestore';

export default function Signup({navigation}: any){
    const[email,setEmail] = useState("");
    const[contraseña, setPassword] = useState("");
    const[name,setName] = useState("");
    const[lastName, setLastName] = useState("");
    const[user, setUser] = useState("");
    const [check1, setCheck1] = useState(false);
    const [checkNoLeaderboard, setCheckNoLeaderboard] = useState(false);
    const [checkAnonymous] = useState(false);

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
                                setLastName(text);
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
                                setPassword(text);
                            }}/>


                        <CheckBox
                            center
                            title="No quiero aparecer en la leaderboard"
                            checked={checkNoLeaderboard}
                            onPress={() => setCheckNoLeaderboard(!checkNoLeaderboard)}
                            style={s.check}
                        />

                        <View style={s.button_container}>
                            <Button
                                title='Registrarse'
                                onPress={async () => {
                                    if (!email || !contraseña || !name || !apellido || !user) {
                                        Alert.alert("Completa los campos DE MANERA CORRECTA.");
                                        return;
                                    }

                                    try {
                                        const userCredential = await createUserWithEmailAndPassword(auth, email, contraseña);
                                        const userId = userCredential.user.uid;

                                        await setDoc(doc(db, "users", userId), {
                                            uid: userId,
                                            name: name,
                                            last_name: lastName,
                                            mail: email,
                                            user: user,
                                            noLeaderboard: checkNoLeaderboard,
                                            anonymous: checkAnonymous,
                                            role: "user",
                                            createdAt: new Date()
                                        });

                                        Alert.alert("Cuenta creada correctamente");
                                        navigation.navigate("Login");
                                    } catch (error: any) {
                                        console.error("Signup error:", error);
                                        Alert.alert("Porfavor completa los campos correctamente.");
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

