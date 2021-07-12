import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer, Switch, TouchableRipple, Text } from "react-native-paper";

import usePreference from "../../hooks/userPreferences";

export const DrawerContent = ({ navigation }) => {
  const [active, setActive] = useState("home");
  const { theme, toggleTheme } = usePreference();

  const onChangeScreen = (screen) => {
    setActive(screen);
    navigation.navigate(screen);
  };

  return (
    <DrawerContentScrollView>
      <Drawer.Section>
        <Drawer.Item
          active={active === "home"}
          label="Home"
          onPress={() => onChangeScreen("home")}
        />
        <Drawer.Item
          active={active === "popular"}
          label="Popular Movies"
          onPress={() => onChangeScreen("popular")}
        />
        <Drawer.Item
          active={active === "news"}
          label="New Movies"
          onPress={() => onChangeScreen("news")}
        />
      </Drawer.Section>
      <Drawer.Section title="Theme">
        <TouchableRipple>
          <View style={styles.preferences}>
            <Text>Dark Theme</Text>
            <Switch value={theme === "dark"} onValueChange={toggleTheme} />
          </View>
        </TouchableRipple>
      </Drawer.Section>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  preferences: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
