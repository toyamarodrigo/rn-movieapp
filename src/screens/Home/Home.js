import React, { useState, useEffect } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Title, Text } from "react-native-paper";
import { map } from "lodash";

import userPreferences from "../../hooks/userPreferences";
import { getNewsMoviesApi, getAllGenresApi, getGenreMoviesApi } from "../../api/movies";
import CarouselVertical from "../../components/CarouselVertical";
import CarouselMulti from "../../components/CarouselMulti";

export const Home = ({ navigation }) => {
  const [newMovies, setNewMovies] = useState(null);
  const [genreList, setGenreList] = useState([]);
  const [genreSelected, setGenreSelected] = useState(28);
  const [genreMovies, setGenreMovies] = useState(null);
  const { theme } = userPreferences();

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

  useEffect(() => {
    (async () => {
      const data = await getGenreMoviesApi(genreSelected);

      setGenreMovies(data.results);
    })();
  }, [genreSelected]);

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
              style={[
                styles.genre,
                {
                  color:
                    theme === "dark"
                      ? genre.id !== genreSelected
                        ? "#8697a5"
                        : "#fff"
                      : genre.id !== genreSelected
                      ? "#8697a5"
                      : "#000",
                },
              ]}
              onPress={() => onChangeGenre(genre.id)}
            >
              {genre.name}
            </Text>
          ))}
        </ScrollView>
        {genreMovies && <CarouselMulti data={genreMovies} navigation={navigation} />}
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
