import React from "react";
import { StyleSheet } from "react-native";
import { Modal, IconButton, Title } from "react-native-paper";

export default function ModalVideo({ showVideo, setShowVideo }) {
  return (
    <Modal contentContainerStyle={styles.modal} visible={showVideo}>
      <Title>Hola</Title>
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
  close: {
    backgroundColor: "#1ea1f2",
    width: 50,
    height: 50,
    borderRadius: 100,
    position: "absolute",
    bottom: 100,
  },
});
