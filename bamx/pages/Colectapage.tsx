import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image, Pressable } from "react-native";


var s = require('../styles/Colectapage')

 interface CampaingUserTotals {
        id: string;
        total_g: number;
        user_id: string;
        campaing_id: string;
    }

export default function Colectapage({route, navigation}: any){
    const { campaign, products } = route.params;
    // has colecta specific products and colecta information
        // need to calc progress again for progressbar
        // display colecta parameters

    // progress specific chart to show how close to foal
    
    // need to fetch user_product documents to get higher for leaderboard
        //leaderboard can be a numbered list


    console.log(route.params)
    return(
        <View style={s.container}>
            <Image
                style={s.headerImg}
                source={{uri:'https://d6isf1yxni2j5.cloudfront.net/large_viveres_coahuila_otis_9e98d4fe39.jpg'}}
            />
            <Pressable 
                onPress = {() => {
                    navigation.navigate("Homepage")
                }}
            >
                <Image
                    source={require('../assets/goBack.png')}
                    style={s.goBackImg}
                />
            </Pressable>
            <View style={s.header}>
                <Text style={s.headerText}>{campaign?.name ?? "Unknown campaign"}</Text>
                <Text style={s.subText}>fecha inicio - fecha fin</Text>
            </View>

            <View style={s.desc}>
                <Text style={s.descText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ullamcorper dapibus lorem quis posuere. Cras vitae imperdiet nibh. Curabitur fermentum hendrerit nunc sit amet blandit.</Text>

            </View>

            <View style={s.desc}>
                <Text style={s.descText}>Articulos necesarios para la colecta: Arroz, Frijol, Aceite, etc etc</Text>

            </View>
 
            {products.map((p: any) => (
                <Text key={p.id}>{p.received_kg} kg</Text>
            ))}
            <View style={s.footer_container}>
                <Image
                    source={require('../assets/bottomHU.png')}
                    style={s.imageFit}
                />
            </View>
        </View>
    )
}

// VISTA CARRUSEL ENTRE LEADERBOARD Y CHART
// Typelist Leaderboard
// Bar chart donations

