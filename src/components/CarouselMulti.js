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
      itemWidth={ITEM_WIDTH}
      layout="default"
      renderItem={(item) => <RenderItem data={item} navigation={navigation} />}
      sliderWidth={width}
    />
  );
}

function RenderItem() {
  return (
    <View>
      <Title>Hola</Title>
    </View>
  );
}
