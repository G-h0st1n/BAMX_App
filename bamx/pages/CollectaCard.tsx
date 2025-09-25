import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

type CollectaCardProps = {
  title: string;
  startDate: string;
  endDate: string;
  progress: number; // número entre 0 y 1
  onPress: () => void;
};

const CollectaCard: React.FC<CollectaCardProps> = ({
  title,
  startDate,
  endDate,
  progress,
  onPress,
}) => {
  return (
    <View style={s.card}>
      {/* Imagen */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1606788075761-3e89d5aa6d4b",
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

const s = StyleSheet.create({
  card: {
    backgroundColor: "#FFC64A", // yellow-100
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 16,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 112, // h-28
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#78350F", // brown-800
  },
  progressBarBackground: {
    width: "100%",
    height: 12,
    backgroundColor: "#4E342E", // brown-700
    borderRadius: 6,
    marginTop: 8,
  },
  progressBarFill: {
    height: 12,
    backgroundColor: "#22C55E", // green-500
    borderRadius: 6,
  },
  button: {
    marginTop: 12,
    backgroundColor: "#FCD34D", // yellow-300
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#3F1D0B", // brown-900
    fontWeight: "600",
  },
});

export default CollectaCard;
