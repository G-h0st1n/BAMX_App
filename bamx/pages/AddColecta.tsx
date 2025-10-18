import { useState } from 'react';
import { Alert, Text, View, Button, Image, TextInput, Pressable, ScrollView } from 'react-native';
var s = require('../styles/AddColecta');

export default function AddColecta({ navigation }: any) {
    const [nombre, setNombre] = useState("");
    const [lugar, setLugar] = useState("");
    const [fechaInicio, setFechaInicio] = useState("");
    const [fechaFin, setFechaFin] = useState("");
    const [goalKG, setGoalKG] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const validarFecha = (fecha: string) => {
        const regex = /^\d{2}\/\d{2}\/\d{4}$/;
        return regex.test(fecha);
    };

    const formatoFecha = (texto: string) => {
        const limpio = texto.replace(/\D/g, '');
        let formateado = limpio;
        if (limpio.length > 2 && limpio.length <= 4) {
            formateado = limpio.slice(0, 2) + '/' + limpio.slice(2);
        } else if (limpio.length > 4) {
            formateado = limpio.slice(0, 2) + '/' + limpio.slice(2, 4) + '/' + limpio.slice(4, 8);
        }
        return formateado;
    };

    return (
        <View style={s.container}>
            <Pressable onPress={() => navigation.navigate("Homepage")}>
                <Image source={require('../assets/goBack.png')} style={s.goBackImg} />
            </Pressable>

            <Text style={s.headerText}> CREAR COLECTA </Text>

            <ScrollView 
                style={s.scrollContainer} 
                contentContainerStyle={{ alignItems: 'center', paddingBottom: 40 }}
                showsVerticalScrollIndicator={false}
            >
                <View style={s.backdrop_container}>
                    <Text style={s.optionText}>Nombre de la colecta</Text>
                    <TextInput 
                        placeholder='Ej. Colecta de alimentos'
                        style={s.forumText}
                        onChangeText={setNombre}
                    />

                    <Text style={s.optionText}>Lugar de la colecta</Text>
                    <TextInput 
                        placeholder='Ej. Parque central'
                        style={s.forumText}
                        onChangeText={setLugar}
                    />

                    <Text style={s.optionText}>Fecha de inicio (DD/MM/AAAA)</Text>
                    <TextInput 
                        placeholder='DD/MM/AAAA'
                        style={s.forumText}
                        maxLength={10}
                        keyboardType='numeric'
                        onChangeText={text => setFechaInicio(formatoFecha(text))}
                        value={fechaInicio}
                    />

                    <Text style={s.optionText}>Fecha de fin (DD/MM/AAAA)</Text>
                    <TextInput 
                        placeholder='DD/MM/AAAA'
                        style={s.forumText}
                        maxLength={10}
                        keyboardType='numeric'
                        onChangeText={text => setFechaFin(formatoFecha(text))}
                        value={fechaFin}
                    />

                    <Text style={s.optionText}>Meta (kg)</Text>
                    <TextInput 
                        placeholder='Ej. 500'
                        style={s.forumText}
                        keyboardType='numeric'
                        onChangeText={setGoalKG}
                    />

                    <Text style={s.optionText}>Descripción</Text>
                    <TextInput 
                        placeholder='Breve descripción de la colecta'
                        style={[s.forumText, { height: 80, textAlignVertical: 'top' }]}
                        multiline
                        onChangeText={setDescripcion}
                    />

                    <View style={s.button_container}>
                        <Button
                            title='Crear Colecta'
                            onPress={() => {
                                if (!nombre || !lugar || !fechaInicio || !fechaFin || !goalKG || !descripcion) {
                                    Alert.alert("Por favor completa todos los campos");
                                    return;
                                }

                                if (!validarFecha(fechaInicio) || !validarFecha(fechaFin)) {
                                    Alert.alert("Las fechas deben tener el formato DD/MM/AAAA");
                                    return;
                                }

                                Alert.alert("Colecta creada correctamente");
                                navigation.navigate("Homepage");
                            }}
                            color='#5BB02F'
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
