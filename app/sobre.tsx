import { View, Text, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Botao from "../components/Botao";

export default function Sobre() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>CineApp</Text>
      <Text style={styles.texto}>Aplicação desenvolvida para apresentação e interação com um catálogo de filmes, utilizando React Native + Expo.</Text>
      <Text style={styles.texto}>Versão: 1.0.0</Text>
      <Text style={styles.texto}>Disciplina: Programação para Dispositivos Móveis I</Text>
      <View style={styles.espaco} />
      <Botao titulo="Voltar ao catálogo" onPress={() => router.push("/catalogo")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  titulo: { color: "#e50914", fontSize: 32, fontWeight: "bold", marginBottom: 16 },
  texto: { color: "#ccc", fontSize: 16, marginBottom: 8, textAlign: "center" },
  espaco: { height: 20 },
});
