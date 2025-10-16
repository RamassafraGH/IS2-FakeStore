import React, { useEffect, useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Product } from "../types/product";
import { getProductById, updateProduct } from "../services/api";

type Props = NativeStackScreenProps<RootStackParamList, "Editar">;

export default function PantallaEditar(props: Props) {
  const { route, navigation } = props;
  const { id } = route.params;
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    getProductById(id).then((p: Product) => {
      setTitle(p.title);
      setPrice(p.price.toString());
    });
  }, []);

  const handleUpdate = () => {
    updateProduct(id, { title, price: parseFloat(price) })
      .then(() => {
        alert("Producto actualizado");
        navigation.navigate("Lista");
      })
      .catch(console.error);
  };

  return (
    <View style={styles.container}>
      <TextInput value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />
      <Button title="Actualizar producto" onPress={handleUpdate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 },
});
