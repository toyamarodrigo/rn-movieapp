import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { IconButton, Title, Text } from "react-native-paper";
import { map } from "lodash";

import ModalVideo from "../../components/ModalVideo";
import { BASE_PATH_IMG } from "../../utils/constants";
import { getMovieByIdApi } from "../../api/movies";

export const Movie = ({
  route,
  route: {
    params: { id },
  },
}) => {
  const [movie, setMovie] = useState(null);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getMovieByIdApi(id);

      setMovie(data);
    })();
  }, []);

  if (!movie) return null;

  return (
    <>
      <ScrollView>
        <MovieImage posterPath={movie.poster_path} />
        <MovieTrailer setShowVideo={setShowVideo} />
        <MovieTitle movie={movie} />
      </ScrollView>
      <ModalVideo movieID={id} setShowVideo={setShowVideo} showVideo={showVideo} />
    </>
  );
};

function MovieImage({ posterPath }) {
  return (
    <View style={styles.viewPoster}>
      <Image source={{ uri: `${BASE_PATH_IMG}/w500${posterPath}` }} style={styles.poster} />
    </View>
  );
}

function MovieTrailer({ setShowVideo }) {
  return (
    <View style={styles.viewPlay}>
      <IconButton
        color="#000"
        icon="play"
        size={30}
        style={styles.play}
        onPress={() => setShowVideo(true)}
      />
    </View>
  );
}

function MovieTitle({ movie }) {
  return (
    <View style={styles.viewInfo}>
      <Title>{movie.title}</Title>
      <View style={styles.viewGenres}>
        {map(movie.genres, (genre) => (
          <Text key={genre.id} style={styles.genre}>
            {genre.name}
          </Text>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewPoster: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
  },
  poster: {
    width: "100%",
    height: 500,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  viewPlay: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  play: {
    backgroundColor: "#fff",
    marginTop: -40,
    marginRight: 30,
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  viewInfo: {
    marginHorizontal: 30,
  },
  viewGenres: {
    flexDirection: "row",
  },
  genre: {
    marginRight: 10,
    color: "#8697a5",
  },
});
