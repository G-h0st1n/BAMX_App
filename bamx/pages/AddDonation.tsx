import { useEffect, useState } from "react";
import { db } from "../App";
import { View, Text, TouchableOpacity, Image, Pressable, TextInput, ImageBackground } from "react-native";
import { BarChart } from "react-native-gifted-charts";
import { doc, getDocs, setDoc, updateDoc, increment, query, where, collection } from "firebase/firestore";
import { Button } from "@rneui/base";

var s = require('../styles/AddDonation')

interface CampaignProduct {
  id: string;
  campaign_id: any; // Firestore DocumentReference
  received_kg: number; 
  campaignId: string;
  product_name: string;
  minimum_kg: number; // goal of kgs
}

export default function AddDonation({route,navigation}:any){
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
                    style={s.goBackButton}
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                    onPress={() => {
                        navigation.replace("Colectapage", { campaign, products });
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
                                
                                const campaignDoc = doc(db, "campaign", campaign.id);
                                const userDoc = doc(db, "users", userID);

                                const totalsQuery = query(
                                    collection(db, "campaign_user_totals"),
                                    where("campaign_id", "==", campaignDoc),
                                    where("user_id", "==", userDoc)
                                );
                                
                                const snapshot = await getDocs(totalsQuery);
                                
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
                                if(!snapshot.empty){
                                    const DocRef = snapshot.docs[0].ref;
                                    await updateDoc(DocRef, {
                                        total_kg: increment(parseFloat(quantity))
                                    });
                                } else{
                                    await setDoc(doc(collection(db, "campaign_user_totals")), {
                                        campaign_id: campaignDoc,
                                        user_id: userDoc,
                                        total_kg: parseFloat(quantity)
                                    });
                                }
                                alert("Donación registrada");
                                
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