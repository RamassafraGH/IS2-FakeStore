import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Product } from "../types/product";
import { getProductById } from "../services/api";

type Props = NativeStackScreenProps<RootStackParamList, "Detalle">;

export default function PantallaDetalle(props: Props) {
  const { route, navigation } = props;
  const { id } = route.params;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    getProductById(id).then(setProduct).catch(console.error);
  }, []);

  if (!product) return <Text>Cargando...</Text>;

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: { width: 150, height: 150, marginBottom: 10 },
  title: { fontSize: 18, fontWeight: "bold" },
  price: { color: "green", marginTop: 10 },
});
