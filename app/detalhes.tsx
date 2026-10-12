import { View, Text, Image, StyleSheet, ScrollView} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import Botao from "../components/Botao";

export default function Detalhes() {
  const { titulo, genero, ano, imagem, sinopse } = useLocalSearchParams<{
    titulo: string;
    genero: string;
    ano: string;
    imagem: string;
    sinopse: string;
  }>();
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={Number(imagem)} style={styles.imagem} />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.texto}>Gênero: {genero}</Text>
      <Text style={styles.texto}>Ano: {ano}</Text>
      <Text style={styles.sinopse}>{sinopse}</Text>
      <Botao titulo="Voltar" onPress={() => router.back()} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#141414",
    alignItems: "center",
    padding: 24,
  },
  imagem: { width: 200, height: 300, borderRadius: 10, marginBottom: 16 },
  titulo: { color: "#fff", fontSize: 26, fontWeight: "bold", marginBottom: 8 },
  texto: { color: "#bbb", fontSize: 16 },
  sinopse: { color: "#ddd", fontSize: 16, textAlign: "center", marginVertical: 20 },
});
