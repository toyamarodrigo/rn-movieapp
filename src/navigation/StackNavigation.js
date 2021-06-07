import React from 'react';
import { Button } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Movie, News, Popular, Search } from '../screens';

const Stack = createStackNavigator();

export default function StackNavigation({ navigation }) {
  const buttonLeft = () => {
    return <Button icon="menu" onPress={() => navigation.openDrawer()} />;
  };

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ title: 'Movie App', headerLeft: () => buttonLeft() }}
      />
      <Stack.Screen
        name="movie"
        component={Movie}
        options={{ title: '', headerLeft: () => buttonLeft() }}
      />
      <Stack.Screen
        name="news"
        component={News}
        options={{ title: 'New Movies', headerLeft: () => buttonLeft() }}
      />
      <Stack.Screen
        name="popular"
        component={Popular}
        options={{ title: 'Popular Movies', headerLeft: () => buttonLeft() }}
      />
      <Stack.Screen
        name="Search"
        component={Search}
        options={{ title: '', headerLeft: () => buttonLeft() }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
