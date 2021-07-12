import React from "react";
import { IconButton } from "react-native-paper";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Movie, News, Popular, Search } from "../../screens";

const Stack = createStackNavigator();

export const StackNavigation = ({ navigation }) => {
  const buttonLeft = () => {
    return <IconButton icon="menu" onPress={() => navigation.openDrawer()} />;
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        component={Home}
        name="home"
        options={{ title: "Movie App", headerLeft: () => buttonLeft() }}
      />
      <Stack.Screen
        component={Movie}
        name="movie"
        options={{ title: "", headerLeft: () => buttonLeft() }}
      />
      <Stack.Screen
        component={News}
        name="news"
        options={{ title: "New Movies", headerLeft: () => buttonLeft() }}
      />
      <Stack.Screen
        component={Popular}
        name="popular"
        options={{ title: "Popular Movies", headerLeft: () => buttonLeft() }}
      />
      <Stack.Screen
        component={Search}
        name="Search"
        options={{ title: "", headerLeft: () => buttonLeft() }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
