import React, { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View, Image } from "react-native";
import { Title, Text } from "react-native-paper";
import { map } from "lodash";
import { Rating } from "react-native-ratings";

import starDark from "../../assets/png/starDark.png";
import starLight from "../../assets/png/starLight.png";
import userPreferences from "../../hooks/userPreferences";
import { BASE_PATH_IMG } from "../../utils/constants";
import noImage from "../../assets/png/default-image.png";
import { getPopularMoviesApi } from "../../api/movies";

export const Popular = ({ navigation }) => {
  const [movies, setMovies] = useState(null);
  const { theme } = userPreferences();

  useEffect(() => {
    (async () => {
      const data = await getPopularMoviesApi(1);

      setMovies(data.results);
    })();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {map(movies, (movie, index) => (
        <Movie key={index} movie={movie} theme={theme} />
      ))}
    </ScrollView>
  );
};

function Movie({ theme, movie: { poster_path, title, release_date, vote_count, vote_average } }) {
  return (
    <View style={styles.movie}>
      <View style={styles.left}>
        <Image
          source={poster_path ? { uri: `${BASE_PATH_IMG}/w500${poster_path}` } : { noImage }}
          style={styles.image}
        />
      </View>
      <View style={styles.right}>
        <Title>{title}</Title>
        <Text>{release_date}</Text>
        <MovieRating theme={theme} voteAverage={vote_average} voteCount={vote_count} />
      </View>
    </View>
  );
}

function MovieRating({ theme, voteAverage, voteCount }) {
  const average = voteAverage / 2;

  return (
    <View style={styles.viewRating}>
      <Rating
        imageSize={20}
        ratingBackgroundColor={theme === "dark" ? "#192734" : "#f0f0f0"}
        ratingColor="#ffc205"
        ratingImage={theme === "dark" ? starDark : starLight}
        startingValue={average}
        style={{ marginRight: 15 }}
        type="custom"
      />
      <Text style={{ fontsize: 12, marginTop: 5, color: "#8697a5" }}>{voteCount} votes</Text>
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
  viewRating: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    marginTop: 10,
  },
});
