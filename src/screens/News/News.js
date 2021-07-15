import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import { Button, Text } from "react-native-paper";
import { map } from "lodash";

import userPreferences from "../../hooks/userPreferences";
import { BASE_PATH_IMG } from "../../utils/constants";
import { getNewsMoviesApi } from "../../api/movies";

const { width } = Dimensions.get("window");

export const News = ({ navigation }) => {
  const [movies, setMovies] = useState(null);
  const [page, setPage] = useState(1);
  const [showButtonMore, setShowButtonMore] = useState(true);

  const { theme } = userPreferences();

  useEffect(() => {
    (async () => {
      const data = await getNewsMoviesApi(page);
      const totalPages = data.total_pages;

      if (page < totalPages) {
        if (!movies) {
          setMovies(data.results);
        } else {
          setMovies([...movies, ...data.results]);
        }
      } else {
        setShowButtonMore(false);
      }
    })();
  }, [page]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {map(movies, (movie, index) => (
          <Movie key={index} movie={movie} navigation={navigation} />
        ))}
      </View>
      {showButtonMore && (
        <Button
          contentStyle={styles.loadMoreContainer}
          labelStyle={{ color: theme === "dark" ? "#fff" : "#000" }}
          model="container"
          style={styles.loadMore}
          onPress={() => setPage(page + 1)}
        >
          Show More...
        </Button>
      )}
    </ScrollView>
  );
};

function Movie({ movie: { id, title, poster_path }, navigation }) {
  const goMovie = () => {
    navigation.navigate("movie", { id });
  };

  return (
    <TouchableWithoutFeedback onPress={goMovie}>
      <View style={styles.movie}>
        {poster_path ? (
          <Image source={{ uri: `${BASE_PATH_IMG}/w500${poster_path}` }} style={styles.image} />
        ) : (
          <Text>{title}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  movie: {
    width: width / 3,
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  loadMoreContainer: {
    paddingTop: 10,
    paddingBottom: 30,
  },
  loadMore: {
    backgroundColor: "transparent",
  },
});
