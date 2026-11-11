import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);
  const incrementarContador = () => setContador(contador + 1);

  return (
    <View style={estilos.body}>
      <View style={estilos.card}>
        <Text style={estilos.titulo}>Interactividad con el DOM</Text>
        <Text style={estilos.subtitulo}>
          Haz clic en el botón para incrementar el contador y registrar la hora exacta.
        </Text>
        <Text style={estilos.counterBox}>{contador}</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  body: { flex: 1, backgroundColor: "#f4f7f6", justifyContent: "center", padding: 16 },
  card: {
    backgroundColor: "#fff", borderRadius: 16, padding: 20,
    elevation: 6, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 12,
  },
  titulo: { fontSize: 24, fontWeight: "800", color: "#2c3e50", textAlign: "center" },
  subtitulo: { fontSize: 13, color: "#555", textAlign: "center", marginVertical: 10 },
  counterBox: { fontSize: 56, fontWeight: "bold", color: "#3498db", textAlign: "center", marginBottom: 16 },
  btnClick: { backgroundColor: "#2ecc71", padding: 12, borderRadius: 8, elevation: 3, alignItems: "center", marginBottom: 20 },
  btnText: { color: "#fff", fontWeight: "bold" },
});