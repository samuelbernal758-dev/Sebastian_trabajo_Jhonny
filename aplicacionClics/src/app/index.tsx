import { View, Text, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={estilos.body}>
      <View style={estilos.card}>
        <Text style={estilos.titulo}>Interactividad con el DOM</Text>
        <Text style={estilos.subtitulo}>
          Haz clic en el botón para incrementar el contador y registrar la hora exacta.
        </Text>
        <Text style={estilos.counterBox}>0</Text>
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
});