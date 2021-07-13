import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Title } from "react-native-paper";

import { getNewsMoviesApi } from "../../api/movies";
import CarouselVertical from "../../components/CarouselVertical";

export const Home = () => {
  const [newMovies, setNewMovies] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getNewsMoviesApi();

      setNewMovies(data.results);
    })();
  }, []);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {newMovies && (
        <View style={styles.news}>
          <Title style={styles.newsTitle}>New Movies</Title>
          <CarouselVertical data={newMovies} />
        </View>
      )}
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
});
