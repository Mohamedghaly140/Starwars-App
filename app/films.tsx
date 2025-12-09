import FilmItem from "@/components/film-item";
import ListEmptyComponent from "@/components/list-empty-component";
import { COLORS } from "@/constants/colors";
import { Film } from "@/types/interfaces";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const FilmsPage = () => {
  const renderItem = ({ item }: { item: Film }) => {
    return <FilmItem film={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Films</Text>
      <FlatList<Film>
        data={[]}
        renderItem={renderItem}
        keyExtractor={item => item.episode_id.toString()}
        ListEmptyComponent={
          <ListEmptyComponent loading={false} message="No films found" />
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
