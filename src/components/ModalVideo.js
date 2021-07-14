import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Modal, IconButton } from "react-native-paper";
import YoutubePlayer from "react-native-youtube-iframe";

import { getVideoMovieApi } from "../api/movies";

export default function ModalVideo({ showVideo, setShowVideo, movieID }) {
  const [video, setVideo] = useState(null);

  useEffect(() => {
    getVideoMovieApi(movieID).then((res) => {
      let idVideo = null;

      res.results.forEach((video) => {
        if (video.site === "YouTube" && !idVideo) {
          idVideo = video.key;
        }
      });
      setVideo(idVideo);
    });
  }, []);

  return (
    <Modal contentContainerStyle={styles.modal} visible={showVideo}>
      <View style={styles.viewPlayer}>
        <YoutubePlayer height={300} play={true} videoId={video} />
      </View>
      <IconButton icon={"close"} style={styles.close} onPress={() => setShowVideo(false)} />
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "#000",
    height: "120%",
    alignItems: "center",
  },
  viewPlayer: {
    width: "100%",
  },
  close: {
    backgroundColor: "#1ea1f2",
    width: 50,
    height: 50,
    borderRadius: 100,
    position: "absolute",
    bottom: 100,
  },
  video: {
    height: 400,
  },
});
