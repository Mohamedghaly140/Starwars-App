import { COLORS } from "@/constants/colors";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FilmDetailsScreen = () => {
  const { filmId } = useLocalSearchParams<{ filmId: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{filmId}</Text>
    </View>
  );
};

export default FilmDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.text,
  },
  episodeId: {
    fontSize: 16,
    color: COLORS.text,
  },
  releaseDate: {
    fontSize: 14,
    color: COLORS.text,
  },
});
