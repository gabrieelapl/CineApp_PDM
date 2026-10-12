import { View, Text, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Botao from "../components/Botao";

export default function Home() {
  const router = useRouter(); 
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/logo.png")}
        style={styles.logo}
      />
      <Text style={styles.nome}>CineApp</Text>
      <Text style={styles.descricao}>
        Seu catálogo de filmes favoritos. Explore, veja os detalhes e marque os
        que você mais gosta.
      </Text>
      <Botao
        titulo="Acessar catálogo"
        onPress={() => router.push("/catalogo")}
      />
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
  logo: { 
    width: 140, height: 140, borderRadius: 70, marginBottom: 20 },
  nome: {
    color: "#e50914",
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 12,
  },
  descricao: {
    color: "#ccc",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
  },
});
