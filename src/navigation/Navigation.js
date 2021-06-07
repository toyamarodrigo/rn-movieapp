import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';

const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <Drawer.Navigator initialRouteName="app">
      <Drawer.Screen name="app" component={StackNavigation} />
    </Drawer.Navigator>
  );
}
