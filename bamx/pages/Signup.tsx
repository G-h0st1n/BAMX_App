import {useState} from 'react';
import {Text, View, Button, Image, TextInput, Pressable} from 'react-native';

var s = require('../styles/Signup')

export default function Signup({navigation}: any){
    const[email,setEmail] = useState("");
    const[contraseña, setContraseña] = useState("");
    const[name,setName] = useState("");
    const[apellido, setApellido] = useState("");
    const[user, setUser] = useState("");

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
                        onPress={() =>{
                            navigation.navigate("Homepage")
                        } }
                        color='#5BB02F'
                    />
                </View>
            </View>
            <View style={s.footer_container}>
                <Image
                    source={require('../assets/bottomSU.png')}
                    style={s.imageFit}
                />
            </View>
        </View>

    )

}

