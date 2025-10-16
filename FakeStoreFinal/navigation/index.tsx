// navigation/index.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PantallaLista from "../screens/PantallaLista";
import PantallaDetalle from "../screens/PantallaDetalle";
import PantallaCrear from "../screens/PantallaCrear";
import PantallaEditar from "../screens/PantallaEditar";
import PantallaEliminar from "../screens/PantallaEliminar";
import { RootStackParamList } from "../types/navigation"; // 👈 Importá los tipos

const Stack = createNativeStackNavigator<RootStackParamList>(); // 👈 Aplicá el tipo

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen name="Lista" component={PantallaLista} />
        <Stack.Screen name="Detalle" component={PantallaDetalle} />
        <Stack.Screen name="Crear" component={PantallaCrear} />
        <Stack.Screen name="Editar" component={PantallaEditar} />
        <Stack.Screen name="Eliminar" component={PantallaEliminar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
