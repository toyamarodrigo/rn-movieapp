import React from "react";
import { IconButton } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Movie, News, Popular, Search } from "../../screens";

const Stack = createStackNavigator();

export const StackNavigation = ({ navigation }) => {
  const buttonLeft = (screen) => {
    switch (screen) {
      case "search":
      case "movie":
        return <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />;
      default:
        return <IconButton icon="menu" onPress={() => navigation.openDrawer()} />;
    }
  };

  const buttonRight = () => {
    return (
      <IconButton
        icon="magnify"
        onPress={() => {
          navigation.navigate("search");
        }}
      />
    );
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="home"
        options={{
          title: "Movie App",
          headerLeft: () => buttonLeft("home"),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        component={Movie}
        name="movie"
        options={{
          title: "",
          headerTransparent: true,
          headerLeft: () => buttonLeft("movie"),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        component={News}
        name="news"
        options={{
          title: "New Movies",
          headerLeft: () => buttonLeft("news"),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        component={Popular}
        name="popular"
        options={{
          title: "Popular Movies",
          headerLeft: () => buttonLeft("popular"),
          headerRight: () => buttonRight(),
        }}
      />
      <Stack.Screen
        component={Search}
        name="search"
        options={{ title: "", headerTransparent: true, headerLeft: () => buttonLeft("search") }}
      />
    </Stack.Navigator>
  );
};

// const styles = StyleSheet.create({

// })
