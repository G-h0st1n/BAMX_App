import { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator, Image } from "react-native";

export default function Homepage(){
   
    

    return(
        <View style={[
            HomeStyle.colceta,
            {
                flexDirection: 'row'
            }
        ]}>


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