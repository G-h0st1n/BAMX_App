import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import ProgressBar from 'react-native-progress-bar-horizontal';

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
        <ProgressBar 
          progress={0.5}
          borderWidth={1}
          fillColor="#5AB02F"
          unfilledColor="#5C2204"
          height={10}
          duration={100}
        />

        {/* Botón */}
        <TouchableOpacity onPress={onPress} style={s.button}>
          <Text style={s.buttonText}>{"> ver más"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default ColectaCard;
