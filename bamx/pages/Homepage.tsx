  import React, { useEffect, useState } from "react";
  import { db } from "../App";
  import { View, ScrollView, Text, StyleSheet, Image, Pressable, FlatList, Button } from "react-native";
  import ColectaCard from "./ColectaCard";
  import { collection, getDocs, DocumentReference } from "firebase/firestore";

  interface Campaign {
    id: string;
    name: string;
    start: any; // Timestamp from Firestore
    end: any;   // Timestamp from Firestore
    goal_kg: number;
    image_url: string;
    place: string;
    is_active: boolean;
  }
  
  interface CampaignProduct {
    id: string;
    campaign_id: any; // Firestore DocumentReference
    received_kg: number;
    campaignId: string;
    minimum_kg: string; // goal of kgs
  }

  var s = require('../styles/Homepage')

  export default function Homepage({ navigation }: any) {
    const [data, setData] = useState<(Campaign & {progress: number})[]>([]);
    const [products, setProducts] = useState<CampaignProduct[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() =>{
      //funcion fetch de todas las colectas.
      async function fetchData() {
        setLoading(true);

        const campaignSnapshot = await getDocs(collection(db, "campaign"));
        const campaigns: Campaign[] = campaignSnapshot.docs.map((doc) => ({
          ...(doc.data() as Campaign), 
          id: doc.id,
        }));
        //console.log("========Colecta Json========")
        //console.log(campaigns);

        const productsSnapshot = await getDocs(collection(db, "campaign_products"));
        const productsData: CampaignProduct[] = productsSnapshot.docs.map((doc) => {
          const data = doc.data() as CampaignProduct;
          return {
            ...data,
            id: doc.id,
            campaignId: (data.campaign_id as DocumentReference).id,
          };
        });
        setProducts(productsData); 

        const campaignsWithProgress = campaigns.map(
          (campaign) => {
            const relatedProducts = productsData.filter((p) => p.campaignId === campaign.id);
            const totalReceived = relatedProducts.reduce(
              (sum, p) => sum + (p.received_kg || 0),
              0
            );
            const progress = Math.min(totalReceived / campaign.goal_kg, 1);

            return { ...campaign, progress };
          });
          
          setData(campaignsWithProgress);
          setLoading(false);
          //console.log("doxuments loaded =======================")
          //console.log("Campaigns:", campaigns);
          //console.log("Products:", products);
/*
          console.log("=== Raw campaign_products ===");
          productsSnapshot.docs.forEach((doc) => {
            console.log(doc.id, doc.data());
          });

          console.log("Processed productsData", productsData);*/
      }
      
      fetchData();
    }, [])

    return (
      <View style={s.container}>
        {/* Header verde con BAMX App y usuario */}
        <View style={s.header}>
        <Text style={s.headerText}>BAMX App</Text>
        
        {/*  
        <Pressable
          onPress={() => {
            navigation.navigate("LogSign");
          }}
        >

        <Image
          source={require("../assets/user.png")}
          style={s.userImage}
          
        />
        </Pressable>
        */}
        <View style={s.button_container}>
          <Button
            title='Registrarse'
            onPress={() => {
              navigation.navigate("Signup");
            }}
            color='#FFAF00'
          />
        </View>

        <View style={s.button_container}>
          <Button
            title='Iniciar sesión'
            onPress={() => {
              navigation.navigate("Login");
            }}
            color='#FFAF00'
          />
        </View>
      </View>  
        {/* Contenido principal */}
          <FlatList 
          contentContainerStyle={s.scrollContent}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <ColectaCard
                title={item.name}
                startDate={item.start?.toDate?.().toLocaleDateString() ?? "N/A"}
                endDate={item.end?.toDate?.().toLocaleDateString() ?? "N/A"}
                progress={item.progress}
                url={item.image_url}
                onPress={() => {
                  const relatedProducts = products.filter((p) => p.campaignId === item.id);
                  navigation.navigate("Colectapage", {campaign: item, products: relatedProducts})} 
                }
              />
            )}
          />
          <View style={s.footer_container}>
              <Image
                  source={require('../assets/bottomHU.png')}
                  style={s.imageFit}
              />
          </View>
      </View>
    );
  }
