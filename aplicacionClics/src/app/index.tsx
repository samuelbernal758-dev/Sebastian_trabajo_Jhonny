import { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from "react-native";

type Registro = { id: number; numero: number; hora: string };

export default function App() {
  const [contador, setContador] = useState(0);
  const [registros, setRegistros] = useState<Registro[]>([]);
  
  const incrementarContador = () => {
      const nuevo = contador + 1;
      setContador(nuevo);
      setRegistros([{ id: nuevo, numero: nuevo, hora: obtenerHora() }, ...registros]);
    };

  const obtenerHora = () => {
    const ahora = new Date();
    const h = String(ahora.getHours()).padStart(2, "0");
    const m = String(ahora.getMinutes()).padStart(2, "0");
    const s = String(ahora.getSeconds()).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const restarContador = () => {
    if (contador > 0) setContador(contador - 1);
  };

  const reiniciar = () => {
    setContador(0);
    setRegistros([]);
  };
return (
  <View style={estilos.body}>
    <View style={estilos.card}>
      <Text style={estilos.titulo}>Interactividad con el DOM</Text>
      <Text style={estilos.subtitulo}>
        Haz clic en el botón para incrementar el contador y registrar la hora exacta.
      </Text>
      <Text style={[estilos.counterBox, contador > 10 && estilos.counterAlto]}>{contador}</Text>

      <View style={estilos.fila}>
        <TouchableOpacity style={estilos.btnClick} onPress={incrementarContador}>
          <Text style={estilos.btnText}>¡Haz Clic Aquí!</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.btnRestar} onPress={restarContador}>
          <Text style={estilos.btnText}>Restar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={estilos.btnReset} onPress={reiniciar}>
          <Text style={estilos.btnText}>Reiniciar</Text>
        </TouchableOpacity>
      </View>

      <View style={estilos.tableContainer}>
        <View style={estilos.tableHeader}>
          <Text style={[estilos.th, estilos.cellNumero]}>Nº Clic</Text>
          <Text style={[estilos.th, estilos.cellHora]}>Hora</Text>
        </View>

        <ScrollView style={estilos.tableBody}>
          {registros.map((item, index) => (
            <View
              key={item.id}
              style={[estilos.tr, index % 2 === 0 ? estilos.trEven : null]}
            >
              <Text style={[estilos.td, estilos.cellNumero]}>{item.numero}</Text>
              <Text style={[estilos.td, estilos.cellHora]}>{item.hora}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

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
  fila: { flexDirection: "row", justifyContent: "center", gap: 8, marginBottom: 20 },
  btnClick: { backgroundColor: "#2ecc71", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 8, elevation: 3 },
  btnRestar: { backgroundColor: "#f39c12", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 8, elevation: 3 },
  btnReset: { backgroundColor: "#95a5a6", paddingVertical: 12, paddingHorizontal: 14, borderRadius: 8, elevation: 3 },
  btnText: { color: "#fff", fontWeight: "bold" },
  tableContainer: { borderWidth: 1, borderColor: "#e0e0e0", borderRadius: 8, overflow: "hidden" },
  tableHeader: { flexDirection: "row", backgroundColor: "#f8f9fa", borderBottomWidth: 1, borderBottomColor: "#e0e0e0" },
  tableBody: { maxHeight: 170 },
  tr: { flexDirection: "row", borderBottomWidth: 1, borderBottomColor: "#e0e0e0", backgroundColor: "#ffffff" },
  trEven: { backgroundColor: "#fafafa" },
  th: { color: "#7f8c8d", fontWeight: "600", fontSize: 14, padding: 10, textAlign: "center" },
  td: { color: "#333", fontSize: 14, padding: 10, textAlign: "center" },
  cellNumero: { flex: 1 },
  cellHora: { flex: 1.5 },
  counterAlto: { color: "#e74c3c" },
});