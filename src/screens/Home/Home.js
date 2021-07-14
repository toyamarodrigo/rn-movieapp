import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Title, Text } from "react-native-paper";
import { map } from "lodash";

import { getNewsMoviesApi, getAllGenresApi } from "../../api/movies";
import CarouselVertical from "../../components/CarouselVertical";

export const Home = ({ navigation }) => {
  const [newMovies, setNewMovies] = useState(null);
  const [genreList, setGenreList] = useState([]);
  const [genreSelected, setGenreSelected] = useState(28);

  useEffect(() => {
    (async () => {
      const data = await getNewsMoviesApi();

      setNewMovies(data.results);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const data = await getAllGenresApi();

      setGenreList(data.genres);
    })();
  }, []);

  const onChangeGenre = (newGenreID) => {
    setGenreSelected(newGenreID);
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {newMovies && (
        <View style={styles.news}>
          <Title style={styles.newsTitle}>New Movies</Title>
          <CarouselVertical data={newMovies} navigation={navigation} />
        </View>
      )}
      <View style={styles.genres}>
        <Title style={styles.genresTitle}>Movies by Genre</Title>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.genreList}>
          {map(genreList, (genre) => (
            <Text
              key={genre.id}
              style={[styles.genre, { color: genre.id !== genreSelected ? "#8697a5" : "#fff" }]}
              onPress={() => onChangeGenre(genre.id)}
            >
              {genre.name}
            </Text>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  news: {
    marginVertical: 10,
  },
  newsTitle: {
    marginBottom: 15,
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  genres: {
    marginTop: 20,
    marginBottom: 50,
  },
  genresTitle: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 22,
  },
  genreList: {
    marginTop: 5,
    marginBottom: 15,
    paddingHorizontal: 20,
    padding: 10,
  },
  genre: {
    marginRight: 20,
    fontSize: 16,
  },
});
