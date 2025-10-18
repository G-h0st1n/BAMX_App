import React, { useEffect, useState } from "react";
import { db, auth } from "../App";
import { View, Text, Image, Pressable, FlatList, Button, ImageBackground } from "react-native";
import ColectaCard from "./ColectaCard";
import { collection, getDocs, DocumentReference } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

interface Campaign {
  id: string;
  name: string;
  start: any; // Timestamp from Firestore
  end: any;   // Timestamp from Firestore
  goal_kg: number;
  image_url: string;
  description: string;
  place: string;
  is_active: boolean;
}

interface CampaignProduct {
  id: string;
  campaign_id: any; // Firestore DocumentReference
  received_kg: number; 
  campaignId: string;
  product_name: string;
  minimum_kg: number; // goal of kgs
}

var s = require('../styles/Homepage')

export default function Homepage({ navigation }: any) {
    const [data, setData] = useState<(Campaign & { progress: number })[]>([]);
    const [products, setProducts] = useState<CampaignProduct[]>([]);
    const [user, setUser] = useState<any>(null); // Estado para el usuario
    const [loading, setLoading] = useState(true);

    // Verificar estado de autenticación
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("Estado de autenticación:", currentUser ? "Sesión iniciada" : "No hay sesión");
        }); 
        return unsubscribe; // Limpiar suscripción al desmontar
    }, []);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);

            const campaignSnapshot = await getDocs(collection(db, "campaign"));
            const campaigns: Campaign[] = campaignSnapshot.docs.map((doc) => ({
                ...(doc.data() as Campaign),
                id: doc.id,
            }));

            const productsSnapshot = await getDocs(collection(db, "campaign_products"));
            const products: CampaignProduct[] = productsSnapshot.docs.map((doc) => {
                const data = doc.data() as CampaignProduct;
                return {
                    ...data,
                    id: doc.id,
                    campaignId: (data.campaign_id as DocumentReference).id,
                };
            });
            setProducts(products);

            const campaignsWithProgress: (Campaign & { progress: number })[] = campaigns.map(
                (campaign) => {
                    const relatedProducts = products.filter((p) => p.campaignId === campaign.id);
                    const totalReceived = relatedProducts.reduce(
                        (sum, p) => sum + (p.received_kg || 0),
                        0
                    );
                    const progress = Math.min(totalReceived / campaign.goal_kg, 1);

                    return {...campaign, progress};
                });

            setData(campaignsWithProgress);
            setLoading(false);
        }

        fetchData();
    }, []);

    return (
        <View style={s.container}>
            <ImageBackground
                source={require("../assets/homeColecta_bg.png")}
                style={s.bg}
            >
            <View style={s.header}>
                <Text style={s.headerText}>DONATON</Text>

                {/* Show profile icon ONLY if user is logged in */}
                {user && (
                    <Pressable onPress={() => navigation.navigate("Userpage")}>
                        <Image
                            source={require("../assets/user.png")}
                            style={s.userImage}
                        />
                    </Pressable>
                )}

                {/* Show Login / Signup ONLY if user is NOT logged in */}
                {!user && (
                    <>
                        <View style={s.button_container}>
                            <Button
                                title="Registrarse"
                                onPress={() => navigation.navigate("Signup")}
                                color="#FFAF00"
                            />
                        </View>

                        <View style={s.button_container}>
                            <Button
                                title="Iniciar sesión"
                                onPress={() => navigation.navigate("Login")}
                                color="#FFAF00"
                            />
                        </View>
                    </>
                )}
            </View>
            <FlatList
                contentContainerStyle={s.scrollContent}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ColectaCard
                        title={item.name}
                        startDate={item.start?.toDate?.().toLocaleDateString() ?? "N/A"}
                        endDate={item.end?.toDate?.().toLocaleDateString() ?? "N/A"}
                        progress={item.progress}
                        url={item.image_url}
                        onPress={() => {
                            const relatedProducts = products.filter((p) => p.campaignId === item.id);
                            navigation.replace("Colectapage", {campaign: item, products: relatedProducts})
                        }}
                    />
                )}
                ListFooterComponent={
                    <View style={s.button_add}>
                        <Button
                            title="Añadir Colecta"
                            color="#28A745"
                            onPress={() => navigation.navigate("CreateColecta")}
                        />
                    </View>
                }
            />
            </ImageBackground>
        </View>
    );
}