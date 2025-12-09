import FilmItem from "@/components/film-item";
import ListEmptyComponent from "@/components/list-empty-component";
import { COLORS } from "@/constants/colors";
import { Film } from "@/types/interfaces";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

const FilmsPage = () => {
  const [films, setFilms] = useState<Film[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFilms = async () => {
      try {
        const response = await fetch("https://swapi.dev/api/films/");
        const data = await response.json();
        setFilms(data.results);
      } catch (error) {
        setError(error as unknown as string);
      } finally {
        setLoading(false);
      }
    };
    fetchFilms();
  }, []);

  const renderItem = ({ item }: { item: Film }) => {
    return <FilmItem film={item} />;
  };

  return (
    <View style={styles.container}>
      <FlatList<Film>
        data={films}
        renderItem={renderItem}
        keyExtractor={item => item.episode_id.toString()}
        ListEmptyComponent={
          <ListEmptyComponent
            loading={loading}
            message={error || "No films found"}
          />
        }
      />
    </View>
  );
};

export default FilmsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.containerBackground,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.text,
  },
});
