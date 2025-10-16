import React, { useEffect, useState } from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet, TouchableOpacity, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { Product } from "../types/product";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

type Props = NativeStackScreenProps<RootStackParamList, "Lista">;

export default function PantallaLista({ navigation }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Cargando productos...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.cardContainer}>
          <ProductCard
            product={item}
            onPress={() => navigation.navigate("Detalle", { id: item.id })}
          />
          <View style={styles.buttonRow}>
            <Button
              title="Editar"
              onPress={() => navigation.navigate("Editar", { id: item.id })}
            />
            <Button
              title="Eliminar"
              color="red"
              onPress={() => navigation.navigate("Eliminar", { id: item.id })}
            />
          </View>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  cardContainer: { marginBottom: 10, paddingHorizontal: 10 },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingHorizontal: 10,
  },
});
