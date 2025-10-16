import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { createProduct } from "../services/api";

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, "Crear">;
};

export default function PantallaCrear({ navigation }: Props) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleCreate = () => {
    createProduct({
      title,
      price: parseFloat(price),
      description: "Nuevo producto",
      image: "https://via.placeholder.com/150",
      category: "otros",
    })
      .then(() => {
        alert("Producto creado");
        navigation.navigate("Lista");
      })
      .catch(console.error);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Título" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Precio" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />
      <Button title="Crear producto" onPress={handleCreate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8 },
});
