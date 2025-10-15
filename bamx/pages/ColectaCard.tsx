import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

  var s = require('../styles/ColectaCard')

type ColectaCardProps = {
  title: string;
  startDate: string;
  endDate: string;
  progress: number; // número entre 0 y 1
  url: string;
  onPress: () => void;
};

const ColectaCard: React.FC<ColectaCardProps> = ({
  title,
  startDate,
  endDate,
  progress,
  url,
  onPress,
}) => {
  return (
    <View style={s.card}>
      {/* Imagen */}
      <Image
        source={{
          uri: url,
        }}
        style={s.image}
      />
      {/* Contenido */}
      <View style={s.content}>
        <Text style={s.title}>
          {title} - [{startDate} - {endDate}]
        </Text>
        {/* Barra de progreso */}
        <View style={s.progressBarBackground}>
          <View style={[s.progressBarFill, { width: `${progress * 100}%` }]} />
        </View>
        {/* Botón */}
        <TouchableOpacity onPress={onPress} style={s.button}>
          <Text style={s.buttonText}>{"> ver más"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default ColectaCard;
