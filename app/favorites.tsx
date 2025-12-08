import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FavoritesPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
    </View>
  );
};

export default FavoritesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
