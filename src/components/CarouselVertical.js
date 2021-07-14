import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, Dimensions, TouchableWithoutFeedback } from "react-native";
import { Text, Title } from "react-native-paper";
import Carousel from "react-native-snap-carousel";
import { map, size } from "lodash";

import { getGenreMovieApi } from "../api/movies";
import { BASE_PATH_IMG } from "../utils/constants";

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

function RenderItem({
  data,
  data: {
    item: { title, poster_path, genre_ids },
  },
}) {
  const [genres, setGenres] = useState(null);
  const imageURL = `${BASE_PATH_IMG}/w500${poster_path}`;

  useEffect(() => {
    (async () => {
      const result = await getGenreMovieApi(genre_ids);

      setGenres(result);
    })();
  }, []);

  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.card}>
        <Image source={{ uri: imageURL }} style={styles.image} />
        <Title style={styles.title}>{title}</Title>
        <View style={styles.genres}>
          {genres &&
            map(genres, (genre, index) => (
              <Text key={index} style={styles.genre}>
                {genre}
                {index !== size(genres) - 1 && ", "}
              </Text>
            ))}
        </View>
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
    },
    shadowOpacity: 1,
    shadowRadius: 10,
  },
  image: {
    width: "100%",
    height: 450,
    borderRadius: 20,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  genres: {
    flexDirection: "row",
    marginHorizontal: 10,
  },
  genre: {
    fontSize: 12,
    color: "#8967a5",
  },
});
