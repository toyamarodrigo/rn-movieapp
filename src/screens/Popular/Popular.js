import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

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
    <View>
      <Text>POPULAR SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
