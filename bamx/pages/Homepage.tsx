import React, { useEffect, useState } from "react";
import { db, auth} from "../App";
import { View, Button, Text, Image, Pressable, FlatList } from "react-native";
import CollectaCard from "./ColectaCard";
import { collection, getDocs, DocumentReference } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";

interface Campaign {
  id: string;
  name: string;
  start: any;
  end: any;
  goal_kg: number;
  image_url: string;
  place: string;
  is_active: boolean;
}

interface CampaignProduct {
  id: string;
  campaign_id: any;
  received_kg: number;
  campaignId: string;
}

var s = require('../styles/Homepage')

export default function Homepage({ navigation }: any) {
    const [data, setData] = useState<(Campaign & { progress: number })[]>([]);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState<any>(null); // Estado para el usuario

    // Verificar estado de autenticación
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            console.log("👤 Estado de autenticación:", currentUser ? "Sesión iniciada" : "No hay sesión");
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

    const handleUserPress = () => {
        if (user) {
            // Si hay usuario logueado, ir a Userpage
            navigation.navigate("Userpage");
        } else {
            // Si no hay usuario, ir a Login?
            navigation.navigate("Login");
        }
    };

    return (
        <View style={s.container}>
            <View style={s.header}>
                <Text style={s.headerText}>BAMX App</Text>

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


            {user && (
                <View style={s.userInfo}>
                    <Text style={s.welcomeText}>Bienvenido, {user.email}</Text>
                </View>
            )}


            <FlatList
                contentContainerStyle={s.scrollContent}
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <CollectaCard
                        title={item.name}
                        startDate={item.start?.toDate?.().toLocaleDateString() ?? "N/A"}
                        endDate={item.end?.toDate?.().toLocaleDateString() ?? "N/A"}
                        progress={item.progress}
                        url={item.image_url}
                        onPress={() => navigation.navigate("Colectapage", { campaignId: item.id })}
                    />
                )}
            />

            <View style={s.footer_container}>
                <Image
                    source={require("../assets/bottomHU.png")}
                    style={s.imageFit}
                />
            </View>
        </View>
    );

}
