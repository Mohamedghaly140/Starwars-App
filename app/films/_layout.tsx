import { COLORS } from "@/constants/colors";
import { Stack } from "expo-router";
import React from "react";

const FilmsLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: COLORS.background,
        },
        headerTintColor: COLORS.text,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Films" }} />
      <Stack.Screen
        name="[filmId]"
        options={{
          title: "Film Details",
          headerBackButtonDisplayMode: "minimal",
        }}
      />
    </Stack>
  );
};

export default FilmsLayout;
