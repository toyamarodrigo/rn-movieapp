import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  Dimensions,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { map, size } from "lodash";

import { BASE_PATH_IMG } from "../../utils/constants";
import { searchMoviesApi } from "../../api/movies";

const { width } = Dimensions.get("window");

export const Search = ({ navigation }) => {
  const [movies, setMovies] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (size(search) > 2) {
      (async () => {
        const data = await searchMoviesApi(search);

        setMovies(data.results);
      })();
    }
  }, [search]);

  return (
    <SafeAreaView>
      <Searchbar
        icon="arrow-left"
        iconColor="transparent"
        placeholder="Search movie"
        style={styles.input}
        onChangeText={(e) => setSearch(e)}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {map(movies, (movie, index) => (
            <Movie key={index} movie={movie} navigation={navigation} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
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
          <Text style={{ color: "#8697a5" }}>{title}</Text>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: -3,
    backgroundColor: "#15212b",
  },
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
});
