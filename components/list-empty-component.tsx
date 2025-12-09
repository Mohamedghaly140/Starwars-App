import { COLORS } from "@/constants/colors";
import React from "react";
import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { height } = Dimensions.get("window");

interface ListEmptyComponentProps {
  loading?: boolean;
  message?: string;
}

const ListmptyComponent = ({
  loading = false,
  message = "No items found",
}: ListEmptyComponentProps) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color={COLORS.text} />
      ) : (
        <Text style={styles.message}>{message}</Text>
      )}
    </View>
  );
};

export default ListmptyComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: height * 0.5,
  },
  message: {
    fontSize: 18,
    color: COLORS.inactive,
    textAlign: "center",
  },
});
