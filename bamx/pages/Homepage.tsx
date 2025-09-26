import React from "react";
import { View, ScrollView, Text, StyleSheet, Image, Pressable } from "react-native";
import CollectaCard from "./CollectaCard";

var s = require('../styles/Homepage')

export default function Homepage({ navigation }: any) {
  return (
    <View style={s.container}>
      {/* Header verde con BAMX App y usuario */}
      <View style={s.header}>
        <Text style={s.headerText}>BAMX App</Text>

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
      </View>

      {/* Contenido principal */}
      <ScrollView contentContainerStyle={s.scrollContent}>
        <CollectaCard
          title="COLECTA"
          startDate="01/10/2025"
          endDate="15/10/2025"
          progress={0.3}
          onPress={() => navigation.navigate("Colectapage")} 
        />

        <CollectaCard
          title="COLECTA"
          startDate="20/10/2025"
          endDate="30/10/2025"
          progress={0.6}
          onPress={() => navigation.navigate("Colectapage")}
        />
      </ScrollView>
          <View style={s.footer_container}>
              <Image
                  source={require('../assets/bottomHU.png')}
                  style={s.imageFit}
              />
          </View>
    </View>
  );
}
