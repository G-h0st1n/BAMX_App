import { View, TextInput , Text} from "react-native";

import styles from "./../styles/Signup"

function Signup(){
    return(
        <View>
            <View style={styles.container}>
            <Text style={styles.title}>SIGN UP</Text>

            <Text>Nombre</Text>
            <TextInput placeholder="Ingrese su nombre" style={styles.input} />

            <Text>Apellido</Text>
            <TextInput placeholder="Ingrese su apellido" style={styles.input} />

            <Text>Correo</Text>
            <TextInput placeholder="Ingrese su correo" style={styles.input} />

            <Text>Usuario</Text>
            <TextInput placeholder="Ingrese su usuario" style={styles.input} />

            <Text>Contraseña</Text>
            <TextInput 
                placeholder="Ingrese su contraseña" 
                secureTextEntry={true} 
                style={styles.input} 
            />
        </View>
        </View>

    )

}

export default Signup;