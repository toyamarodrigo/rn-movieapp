import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { DrawerContent } from "../DrawerContent";
import { StackNavigation } from "../StackNavigation";

const Drawer = createDrawerNavigator();

export const Navigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      initialRouteName="app"
    >
      <Drawer.Screen component={StackNavigation} name="app" />
    </Drawer.Navigator>
  );
};
