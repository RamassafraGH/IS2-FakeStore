import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Product } from "../types/product";

type Props = {
  product: Product;
  onPress?: () => void;
};

export default function ProductCard({ product, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ddd",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    resizeMode: "contain",
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    color: "green",
    marginTop: 4,
  },
});
