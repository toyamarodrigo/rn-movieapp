import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import { getMovieByIdApi } from "../../api/movies";

export const Movie = ({
  route,
  route: {
    params: { id },
  },
}) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getMovieByIdApi(id);

      setMovie(data);
    })();
  }, []);

  return (
    <View>
      <Text>MOVIE SCREEN</Text>
    </View>
  );
};

const styles = StyleSheet.create({});
