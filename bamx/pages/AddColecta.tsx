import { useEffect, useState } from "react";
import { db } from "../App";
import { View, Text, TouchableOpacity, Image, Pressable, TextInput, ImageBackground } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { doc, getDoc, setDoc, updateDoc, increment } from "firebase/firestore";
import { Button } from "@rneui/base";

var s = require('../styles/AddColecta')

interface CampaignProduct {
  id: string;
  campaign_id: any; // Firestore DocumentReference
  received_kg: number; 
  campaignId: string;
  product_name: string;
  minimum_kg: number; // goal of kgs
}

export default function AddColecta({route,navigation}:any){
    const { campaign } = route.params;
    const { products } = route.params as { products: CampaignProduct[] };

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
                        navigation.replace("Colectapage", {campaign:campaign,products:products})
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
                            setUser(text);
                        }}
                    />

                    <Text style={s.optionText}>ID de usuario</Text>
                    <TextInput
                        placeholder='ID de Usuario'
                        style={s.forumText}
                        onChangeText={text=>{
                            setUserID(text);
                        }} 
                    />

                    <Text style={s.optionText}>Donacion</Text>
                    <TextInput
                        placeholder='Donativo'
                        style={s.forumText}
                        onChangeText={text=>{
                            setDonation(text);
                        }} 
                        />
                    <Text style={s.optionText}>Cantidad en kilos</Text>
                    <TextInput
                        placeholder='Cantidad'
                        style={s.forumText}
                        onChangeText={text=>{
                            setQuantity(text);
                        }}
                    />

                    <View style={s.button_container}>
                        <Button
                            title='Registrar donacion'
                            color='#E6233F'
                            onPress={async() => {
                                if(!userID || !quantity){
                                    alert("Completa todos los campos primero");
                                    return;
                                }
                                
                                const campaingDoc = doc(db, "campaigns", campaign.id);
                                const userDoc = doc(db, "users", userID);
                                const campUserTotalDoc = doc(db, "campaign_user_totals", `${campaign.id}_${userID}`);
                                
                                const snapshot = await getDoc(campUserTotalDoc);
                                
                                // update campaign product
                                const matchedProduct = products.find(
                                    (p) => p.product_name.toLowerCase() === donation.toLowerCase()
                                );

                                if (!matchedProduct) {
                                    alert("No se encontró el producto para la donación.");
                                    return;
                                }

                                const productDoc = doc(db, "campaign_products", matchedProduct.id);

                                await updateDoc(productDoc, {
                                    received_kg: increment(parseFloat(quantity)),
                                });

                                // create campaign user totals or update it
                                if(snapshot.exists()){
                                    await updateDoc(campUserTotalDoc, {
                                        total_kg: increment(parseFloat(quantity))
                                    });
                                    alert("Donación registrada");
                                } else{
                                    await setDoc(campUserTotalDoc, {
                                        campaign_id: campaingDoc,
                                        user_id: userDoc,
                                        total_kg: parseFloat(quantity)
                                    });
                                    alert("Donación registrada");
                                }
                                
                                setUser("");
                                setUserID("");
                                setDonation("");
                                setQuantity("");
                                navigation.replace("Homepage");
                            }}
                        />                               
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
}