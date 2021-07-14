import React from "react";
import { StyleSheet, View, Image, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Title, Text } from "react-native-paper";
import Carousel from "react-native-snap-carousel";

import { BASE_PATH_IMG } from "../utils/constants";

const { width } = Dimensions.get("window");
const ITEM_WIDTH = Math.round(width * 0.3);

export default function CarouselMulti({ data, navigation }) {
  return (
    <Carousel
      data={data}
      firstItem={1}
      inactiveSlideOpacity={1}
      inactiveSlideScale={1}
      itemWidth={ITEM_WIDTH}
      layout="default"
      renderItem={(item) => <RenderItem data={item} navigation={navigation} />}
      sliderWidth={width}
    />
  );
}

function RenderItem({
  data,
  data: {
    item: { id, title, poster_path },
  },
  navigation,
}) {
  const imageURL = `${BASE_PATH_IMG}/w500${poster_path}`;

  const onNavigation = () => {
    navigation.navigate(id);
  };

  return (
    <TouchableWithoutFeedback onPress={onNavigation}>
      <View style={styles.card}>
        <Image source={{ uri: imageURL }} style={styles.image} />
        <Title numberOfLines={1} style={styles.title}>
          {title}
        </Title>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
      shadowOpacity: 1,
      shadowRadius: 10,
    },
  },
  image: {
    width: "85%",
    height: 170,
    borderRadius: 10,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 10,
    fontSize: 16,
  },
});
