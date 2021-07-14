import React, { useState, useEffect } from "react";
import { StyleSheet, View, Image, ScrollView } from "react-native";
import { IconButton, Title, Text } from "react-native-paper";
import { map } from "lodash";
import { Rating } from "react-native-ratings";

import userPreferences from "../../hooks/userPreferences";
import starDark from "../../assets/png/starDark.png";
import starLight from "../../assets/png/starLight.png";
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
        <MovieRating voteAverage={movie.vote_average} voteCount={movie.vote_count} />
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

function MovieRating({ voteCount, voteAverage }) {
  const average = voteAverage / 2;
  const { theme } = userPreferences();

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
      <Text style={{ fontSize: 16, marginRight: 15 }}>{average}</Text>
      <Text style={{ fontSize: 12, color: "#8697a5" }}>{voteCount} votes</Text>
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
  viewRating: {
    marginHorizontal: 30,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
});
