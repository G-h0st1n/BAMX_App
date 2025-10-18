import { useEffect, useState } from "react";
import { db } from "../App";
import { View, Text, TouchableOpacity, Image, Pressable, TextInput, ImageBackground } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { collection, getDocs, DocumentReference } from "firebase/firestore";
import { Button } from "@rneui/base";

var s = require('../styles/AddColecta')

interface CampaingUserTotals {
    id: string;
    total_g: number;
    user_id: string;
    campaing_id: string;
}

export default function AddColecta({navigation}:any){
    const[user, setUser] = useState("");    
    const[userID,setUserID] = useState("");
    const[donation, setDonation] = useState("");
    const[quantity,setQuantity] = useState("");

    return(
        <View style={s.container}>
            <ImageBackground
                source={require('../assets/add_bg.png')}
                style={s.bg}
            >
                <Pressable 
                    onPress = {() => {
                        navigation.navigate("Colectapage")
                    }}
                >
                    <Image
                        source={require('../assets/goBack.png')}
                        style={s.goBackImg}
                    />
                </Pressable>

                <Text style={s.headerText}>AÑADIR DONACION</Text>
                <View style={s.backdrop_container}> 

                    <Text style={s.optionText}>Usuario</Text>
                    <TextInput
                    placeholder='Usuario'
                    style={s.forumText}
                    onChangeText={text=>{
                        setUser(user);
                    }}
                    />

                    <Text style={s.optionText}>ID de usuario</Text>
                    <TextInput
                        placeholder='ID de Usuario'
                        style={s.forumText}
                        onChangeText={text=>{
                            setUserID(userID);
                        }} 
                        />

                    <Text style={s.optionText}>Donacion</Text>
                    <TextInput
                        placeholder='Donativo'
                        style={s.forumText}
                        onChangeText={text=>{
                            setDonation(donation);
                        }} 
                        />

                    <Text style={s.optionText}>Cantidad en kilos</Text>
                    <TextInput
                        placeholder='Cantidad'
                        style={s.forumText}
                        onChangeText={text=>{
                            setQuantity(quantity);
                        }}
                        />

                        <View style={s.button_container}>
                            <Button
                                title='Registrar donacion'
                                color='#E6233F'
                                />                    
                                       
                        </View>
                    </View>
            </ImageBackground>
        </View>
    )
}