import { Pressable, Text, StyleSheet } from "react-native";

type Props = {
  titulo: string;
  onPress: () => void;
};

export default function Botao({ titulo, onPress }: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.botao, pressed && styles.botaoPressionado]}
    >
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#e50914",
    paddingVertical: 14,
    paddingHorizontal: 28,
    borderRadius: 8,
    alignItems: "center",
  },
  botaoPressionado: {
    opacity: 0.6,
    transform: [{ scale: 0.97 }],
  },
  texto: { color: "#fff", fontSize: 16, fontWeight: "bold" },
});
