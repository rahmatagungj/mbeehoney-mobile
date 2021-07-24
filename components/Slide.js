import React from "react";
import { View, StyleSheet, Text, Image, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const Slide = ({ item }) => {
  return (
    <View style={styles.cardView}>
      <Image style={styles.image} source={item.url} />
      <View style={styles.textView}>
        <Text style={styles.titleBanner}>{item.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    width: width - 15,
    height: height / 5,
    backgroundColor: "white",
    backgroundColor: "#f1f4f9",
    marginBottom: 10,
    marginHorizontal: 6,
    borderRadius: 10,
  },
  textView: {
    position: "absolute",
    top: 5,
    margin: 10,
    maxWidth: 130,
  },
  image: {
    width: width - 15,
    height: height / 5,
    borderRadius: 10,
  },
  itemTitle: {
    color: "white",
    fontSize: 22,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    marginBottom: 5,
    fontWeight: "bold",
    elevation: 5,
  },
  itemDescription: {
    color: "white",
    fontSize: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0.8, height: 0.8 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  },
  titleBanner: {
    color: "white",
    fontSize: 14,
  },
});

export default Slide;
