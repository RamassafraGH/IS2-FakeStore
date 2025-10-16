import React from "react";
import { View, Button, Alert, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import { deleteProduct } from "../services/api";

type Props = {
  route: RouteProp<RootStackParamList, "Eliminar">;
  navigation: NativeStackNavigationProp<RootStackParamList, "Eliminar">;
};

export default function PantallaEliminar({ route, navigation }: Props) {
  const { id } = route.params;

  const handleDelete = () => {
    Alert.alert("Confirmar", "¿Eliminar producto?", [
      { text: "Cancelar" },
      {
        text: "Eliminar",
        onPress: () => {
          deleteProduct(id)
            .then(() => {
              alert("Producto eliminado");
              navigation.navigate("Lista");
            })
            .catch(console.error);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Button title="Eliminar producto" color="red" onPress={handleDelete} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
});
