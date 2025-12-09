import { COLORS } from "@/constants/colors";
import { Film } from "@/types/interfaces";
import { useLocalSearchParams, useNavigation } from "expo-router";
import React, { useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const FilmDetailsScreen = () => {
  const navigation = useNavigation();
  const { filmId, title } = useLocalSearchParams<{
    filmId: string;
    title: string;
  }>();
  const [film, setFilm] = useState<Film | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        const response = await fetch(`https://swapi.dev/api/films/${filmId}`);
        const data = await response.json();
        setFilm(data);
      } catch (error) {
        setError(error as unknown as string);
      } finally {
        setLoading(false);
      }
    };
    fetchFilm();
  }, [filmId]);

  useLayoutEffect(() => {
    navigation.setOptions?.({
      title: title || "",
    });
  }, [title, navigation]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.text} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.gap}>
        <Text style={styles.title}>{film?.title}</Text>
        <Text style={styles.detail}>Episode: {film?.episode_id}</Text>
        <Text style={styles.detail}>Director: {film?.director}</Text>
        <Text style={styles.detail}>Producer: {film?.producer}</Text>
        <Text style={styles.detail}>Released: {film?.release_date}</Text>
      </View>
      <Text style={styles.crawl}>Opening Crawl: {film?.opening_crawl}</Text>
    </ScrollView>
  );
};

export default FilmDetailsScreen;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.background,
  },
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
  detail: {
    fontSize: 16,
    color: COLORS.text,
  },
  releaseDate: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 16,
    color: COLORS.text,
    textAlign: "center",
  },
  crawl: {
    fontSize: 16,
    marginTop: 16,
    color: COLORS.text,
    fontStyle: "italic",
  },
  gap: {
    gap: 8,
  },
});
