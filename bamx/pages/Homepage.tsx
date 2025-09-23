import { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator, Image, Button, Pressable} from "react-native";

var s = require('../styles/Homepage')

export default function Homepage({navigation}: any){
   
    return(
        <View style={[
            HomeStyle.colceta,
            {
                flexDirection: 'column'
            }
        ]}>

        <Pressable onPress={navigation.navigate("LogSign")}>
            <Image
                source={require('../styles/user.png')}
                style={{width:100, height:100}}
            />

        </Pressable>

        </View>
    )
}

const HomeStyle = StyleSheet.create({
  colceta: {
    flex: 1,
    backgroundColor: '#FFC64A',
    padding: 10,
  }
});