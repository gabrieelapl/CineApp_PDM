import { useState } from "react";
import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { ImageSourcePropType } from "react-native";

type Props = {
  titulo: string;
  genero: string;
  ano: number;
  imagem: ImageSourcePropType;
  sinopse: string;
};

export default function FilmeCard({
  titulo,
  genero,
  ano,
  imagem,
  sinopse,
}: Props) {
  const [favorito, setFavorito] = useState(false);
  const router = useRouter();

  function abrirDetalhes() {
    router.push({
      pathname: "/detalhes",
      params: { titulo, genero, ano: String(ano), imagem: String(imagem), sinopse },
    });
  }

  return (
    <Pressable
      onPress={abrirDetalhes}
      style={({ pressed }) => [styles.card, pressed && styles.cardPressionado]}
    >
      <Image source={imagem} style={styles.imagem} />

      <View style={styles.info}>
        <Text style={styles.titulo}>{titulo}</Text>
        <Text style={styles.texto}>{genero}</Text>
        <Text style={styles.texto}>{ano}</Text>

        <Pressable
          onPress={() => setFavorito(!favorito)}
          style={({ pressed }) => [
            styles.botaoFav,
            favorito && styles.botaoFavAtivo,
            pressed && styles.botaoFavPressionado,
          ]}
        >
          <Text style={styles.textoFav}>
            {favorito ? "★ Favorito" : "☆ Favoritar"}
          </Text>
        </Pressable>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#1f1f1f",
    borderRadius: 10,
    marginBottom: 12,
    overflow: "hidden",
  },
  cardPressionado: { opacity: 0.7 },
  imagem: { width: 100, height: 140 },
  info: { flex: 1, padding: 12, justifyContent: "space-between" },
  titulo: { color: "#fff", fontSize: 18, fontWeight: "bold" },
  texto: { color: "#bbb", fontSize: 14 },
  botaoFav: {
    alignSelf: "flex-start",
    backgroundColor: "#444",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  botaoFavAtivo: { backgroundColor: "#e50914" },
  botaoFavPressionado: { opacity: 0.6 },
  textoFav: { color: "#fff", fontWeight: "bold" },
});
