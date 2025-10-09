import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator, Image } from "react-native";

var s = require('../styles/Colectapage')


export default function Colectapage({navigation}: any){
    return(
        <View style={s.container}>
            <View style={s.footer_container}>
                <Image
                    source={require('../assets/bottomHU.png')}
                    style={s.imageFit}
                />
            </View>
        </View>
    )
}
