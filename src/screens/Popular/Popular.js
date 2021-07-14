import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { map } from "lodash";

import { BASE_PATH_IMG } from "../../utils/constants";
import noImage from "../../assets/png/default-image.png";
import { getPopularMoviesApi } from "../../api/movies";

export const Popular = ({ navigation }) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getPopularMoviesApi(1);

      setMovies(data.results);
    })();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {map(movies, (movie, index) => (
        <Movie key={index} movie={movie} />
      ))}
    </ScrollView>
  );
};

function Movie({ movie: { poster_path } }) {
  return (
    <View style={styles.movie}>
      <View style={styles.left}>
        <Image
          source={poster_path ? { uri: `${BASE_PATH_IMG}/w500${poster_path}` } : { noImage }}
          style={styles.image}
        />
      </View>
      <View style={styles.right}>
        <Text>RIGHT</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  movie: {
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  left: {
    marginRight: 20,
  },
  image: {
    width: 100,
    height: 150,
  },
});
