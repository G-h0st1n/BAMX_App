import {useState} from 'react';
import {Text, View, Button, Image, TextInput} from 'react-native';

var s = require('../styles/Signup')

export default function Signup({navigation}: any){
    const[email,setEmail] = useState("");
    const[contraseña, setContraseña] = useState("");
    const[name,setName] = useState("");
    const[apellido, setApellido] = useState("");
    const[user, setUser] = useState("");

    return(
        <View style={s.container}>
            <View style={s.backdrop_container}>
                <Text> CREAR CUENTA </Text>

                <Text>Nombre</Text>
                <TextInput 
                placeholder='Nombre'
                onChangeText={text=>{
                    setName(text);
                }}/>

                <Text>Apellido</Text>
                <TextInput 
                placeholder='Apellido'
                onChangeText={text=>{
                    setApellido(text);
                }}/>

                <Text>Correo</Text>
                <TextInput 
                placeholder='Correo'
                onChangeText={text=>{
                    setEmail(text);
                }}/>

                <Text>Usuario</Text>
                <TextInput 
                placeholder='Usuario'
                onChangeText={text=>{
                    setUser(text);
                }}/>

                <Text>Contraseña</Text>
                <TextInput 
                placeholder='Contraseña'
                onChangeText={text=>{
                    setContraseña(text);
                }}/>

                <View style={s.button_container}>
                    <Button
                        title='Registrarse'
                        onPress={() =>{
                            navigation.navigate("Userpage")
                        } }
                        color='#5BB02F'
                    />
                </View>
            </View>
            
            <View >
                <Image
                    source={require('../assets/bottomSU.png')}
                />
            </View>
        </View>

    )

}

