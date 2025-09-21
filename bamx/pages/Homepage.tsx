import { useEffect, useState } from "react";
import { View, StyleSheet, Text, ActivityIndicator, Image, Button} from "react-native";

export default function Homepage({navigation}: any){
   
    return(
        <View style={[
            HomeStyle.colceta,
            {
                flexDirection: 'column'
            }
        ]}>
            <Button
                title="Sign Up"
                onPress={() => {
                    navigation.navigate("LogSign")
                }}
            />
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