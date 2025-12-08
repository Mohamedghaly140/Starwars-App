import React from "react";
import { StyleSheet, Text, View } from "react-native";

const FilmsPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Films</Text>
    </View>
  );
};

export default FilmsPage;

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
