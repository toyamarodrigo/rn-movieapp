import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, Dimensions, TouchableWithoutFeedback } from "react-native";
import Carousel from "react-native-snap-carousel";

const { width } = Dimensions.get("window");

const ITEM_WIDTH = Math.round(width * 0.7);

export default function CarouselVertical({ data }) {
  return (
    <Carousel
      data={data}
      itemWidth={ITEM_WIDTH}
      layout={"default"}
      renderItem={(item) => <RenderItem data={item} />}
      sliderWidth={width}
    />
  );
}

function RenderItem({ data }) {
  return (
    <View>
      <Text>Pelicula</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
