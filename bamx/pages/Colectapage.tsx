import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";

var s = require('../styles/Colectapage')

 interface CampaingUserTotals {
        id: string;
        total_g: number;
        user_id: string;
        campaing_id: string;
    }

export default function Colectapage({route}: any){
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
            <View style={s.header}>
                <Text style={s.headerText}>NOMBRE DE CAMPAÑA</Text>
                <Text style={s.subText}>fecha inicio - fecha fin</Text>
            </View>

            <Text>{campaign?.name ?? "Unknown campaign"}</Text>
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
