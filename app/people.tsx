import React from "react";
import { StyleSheet, Text, View } from "react-native";

const PeoplePage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>People</Text>
    </View>
  );
};

export default PeoplePage;

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
