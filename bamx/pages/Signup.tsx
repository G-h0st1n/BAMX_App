import "./../styles/Signup"
import {useState} from 'react';
import {Text, View, Button, Image, TextInput} from 'react-native';

export default function Signup({navigation}: any){
    return(
        <View>
            <Text> CREAR CUENTA </Text>
            <form>

                <Text>Nombre</Text>
                <input type="text" placeholder="Ingrese su nombre"/>    

                <Text>Apellido</Text>
                <input type="text" placeholder="Ingrese su apellido"/>

                <Text>Correo</Text>
                <input type="text" placeholder="Ingrese su correo"/>    

                <Text>Usuario</Text>
                <input type="text" placeholder="Ingrese su usuario"/>

                <Text>Contraseña</Text>
                <input type="text" placeholder="Ingrese su contraseña"/>           
                
            </form>

        <Button
            title='Registrarse'
            onPress={() =>{
                navigation.navigate("Userpage")
            } }
        />
        
        </View>

    )

}

