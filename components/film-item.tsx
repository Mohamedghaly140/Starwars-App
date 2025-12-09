import { COLORS } from "@/constants/colors";
import { Film } from "@/types/interfaces";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface FilmItemProps {
  film: Film;
}

const FilmItem = ({ film }: FilmItemProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{film.title}</Text>
      <Text style={styles.episodeId}>EpisodeL {film.episode_id}</Text>
      <Text style={styles.releaseDate}>Released: {film.release_date}</Text>
    </View>
  );
};

export default FilmItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: COLORS.background,
    marginHorizontal: 16,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.text,
    marginBottom: 8,
  },
  releaseDate: {
    fontSize: 14,
    color: COLORS.white,
  },
  episodeId: {
    fontSize: 14,
    color: COLORS.white,
  },
});
