import { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import FilmeCard from "../components/FilmeCard";
import Botao from "../components/Botao";

const filmes = [
  {
    titulo: "Interestellar",
    genero: "Drama, Ficção Científica",
    ano: 2014,
    imagem: require("../assets/images/interestellar.jpeg"),
    sinopse:
      "Após ver a Terra consumindo boa parte de suas reservas naturais, um grupo de astronautas recebe a missão de verificar possíveis planetas para receberem a população mundial, possibilitando a continuação da espécie. Cooper (Matthew McConaughey) é chamado para liderar o grupo e aceita a missão sabendo que pode nunca mais ver os filhos. Ao lado de Brand (Anne Hathaway), Jenkins (Marlon Sanders) e Doyle (Wes Bentley), ele seguirá em busca de uma nova casa. Com o passar dos anos, sua filha Murph (Mackenzie Foy e Jessica Chastain) investirá numa própria jornada para também tentar salvar a população do planeta.",
  },
  {
    titulo: "O Poderoso Chefão",
    genero: "Drama, Policial",
    ano: 1972,
    imagem: require("../assets/images/poderosoChefao.jpeg"),
    sinopse: "Don Vito Corleone (Marlon Brando) é o chefe de uma família de Nova York que está feliz, pois Connie (Talia Shire), sua filha, se casou com Carlo (Gianni Russo). Porém, durante a festa, Bonasera (Salvatore Corsitto) é visto no escritório de Don Corleone pedindo justiça, vingança na verdade contra membros de uma quadrilha, que espancaram barbaramente sua filha por ela ter se recusado a fazer sexo para preservar a honra. Vito discute, mas os argumentos de Bonasera o sensibilizam e ele promete que os homens, que maltrataram a filha de Bonasera não serão mortos, pois ela também não foi, mas serão severamente castigados. Vito porém deixa claro que ele pode chamar Bonasera algum dia para devolver o favor. Do lado de fora, no meio da festa, está o terceiro filho de Vito, Michael (Al Pacino), um capitão da marinha muito decorado que há pouco voltou da 2ª Guerra Mundial. Universitário educado, sensível e perceptivo, ele quase não é notado pela maioria dos presentes, com exceção de uma namorada da faculdade, Kay Adams (Diane Keaton), que não tem descendência italiana mas que ele ama. Em contrapartida há alguém que é bem notado, Johnny Fontane (Al Martino), um cantor de baladas românticas que provoca gritos entre as jovens que beiram a histeria. Don Corleone já o tinha ajudado, quando Johnny ainda estava em começo de carreira e estava preso por um contrato com o líder de uma grande banda, mas a carreira de Johnny deslanchou e ele queria fazer uma carreira solo. Por ser seu padrinho Vito foi procurar o líder da banda e ofereceu 10 mil dólares para deixar Johnny sair, mas teve o pedido recusado. Assim, no dia seguinte Vito voltou acompanhado por Luca Brasi (Lenny Montana), um capanga, e após uma hora ele assinou a liberação por apenas mil dólares, mas havia um detalhe: nas negociações Luca colocou uma arma na cabeça do líder da banda. Agora, no meio da alegria da festa, Johnny quer falar algo sério com Vito, pois precisa conseguir o principal papel em um filme para levantar sua carreira, mas o chefe do estúdio, Jack Woltz (John Marley), nem pensa em contratá-lo. Nervoso, Johnny começa a chorar e Vito, irritado, o esbofeteia, mas promete que ele conseguirá o almejado papel. Enquanto a festa continua acontecendo, Don Corleone comunica a Tom Hagen (Robert Duvall), seu filho adotivo que atua como conselheiro, que Carlo terá um emprego mas nada muito importante, e que os negócios não devem ser discutidos na sua frente. Os verdadeiros problemas começam para Vito quando Sollozzo (Al Lettieri), um gângster que tem apoio de uma família rival, encabeçada por Phillip Tattaglia (Victor Rendina) e seu filho Bruno (Tony Giorgio). Sollozzo, em uma reunião com Vito, Sonny e outros, conta para a família que ele pretende estabelecer um grande esquema de vendas de narcóticos em Nova York, mas exige permissão e proteção política de Vito para agir. Don Corleone odeia esta idéia, pois está satisfeito em operar com jogo, mulheres e proteção, mas isto será apenas a ponta do iceberg de uma mortal luta entre as famílias.",
  },
  {
    titulo: "Matrix",
    genero: "Ação, Ficção Científica",
    ano: 1999,
    imagem: require("../assets/images/matrix.jpeg"),
    sinopse: "Em um futuro próximo, Thomas Anderson (Keanu Reeves), um jovem programador de computador que mora em um cubículo escuro, é atormentado por estranhos pesadelos nos quais encontra-se conectado por cabos e contra sua vontade, em um imenso sistema de computadores do futuro. Em todas essas ocasiões, acorda gritando no exato momento em que os eletrodos estão para penetrar em seu cérebro. À medida que o sonho se repete, Anderson começa a ter dúvidas sobre a realidade. Por meio do encontro com os misteriosos Morpheus (Laurence Fishburne) e Trinity (Carrie-Anne Moss), Thomas descobre que é, assim como outras pessoas, vítima do Matrix, um sistema inteligente e artificial que manipula a mente das pessoas, criando a ilusão de um mundo real enquanto usa os cérebros e corpos dos indivíduos para produzir energia. Morpheus, entretanto, está convencido de que Thomas é Neo, o aguardado messias capaz de enfrentar o Matrix e conduzir as pessoas de volta à realidade e à liberdade",
  },
  {
    titulo: "Toy Story",
    genero: "Animação, Comédia, Família",
    ano: 1995,
    imagem: require("../assets/images/toy-story.jpeg"),
    sinopse: "O aniversário de Andy está chegando e os brinquedos estão nervosos. Afinal de contas, eles temem que um novo brinquedo possa substituí-los. Liderados por Woody, um caubói que é também o brinquedo predileto de Andy, eles montam uma escuta que lhes permite saber dos presentes ganhos. Entre eles está Buzz Lightyear, o boneco de um patrulheiro espacial, que logo passa a receber mais atenção do garoto. Isto aos poucos gera ciúmes em Woody, que tenta fazer com que ele caia atrás da cama. Só que o plano dá errado e Buzz cai pela janela. É o início da aventura de Woody, que precisa resgatar Buzz também para limpar sua barra com os outros brinquedos.",
  },
  {
    titulo: "Parasita",
    genero: "Drama, Suspense",
    ano: 2019,
    imagem: require("../assets/images/parasita.jpeg"),
    sinopse: "Em Parasita, toda a família de Ki-taek (Song Kang Ho) está desempregada, vivendo num porão sujo e apertado. Uma obra do acaso faz com que o filho adolescente da família comece a dar aulas de inglês à garota de uma família rica. Fascinados com a vida luxuosa destas pessoas, pai, mãe, filho e filha bolam um plano para se infiltrarem também na família burguesa, um a um. No entanto, os segredos e mentiras necessários à ascensão social custarão caro a todos.",
  },
  {
    titulo: "Cidade de Deus",
    genero: "Drama, Policial",
    ano: 2002,
    imagem: require("../assets/images/cidade-de-deus.jpeg"),
    sinopse: "Dadinho (Douglas Silva) e Buscapé são grandes amigos, que cresceram juntos imersos em um universo de muita violência. Na Cidade de Deus, favela carioca conhecida por ser um dos locais mais violentos do Rio de Janeiro, os caminhos das duas crianças divergem, quando um se esforça para se tornar um fotógrafo e o outro o chefe do tráfico. Buscapé (Alexandre Rodrigues) é um jovem pobre, negro e muito sensível, que vive amedrontado com a possibilidade de se tornar um bandido, e acaba sendo salvo de seu destino por causa de seu talento como fotógrafo, o qual permite que siga carreira na profissão. É através de seu olhar atrás da câmera que Buscapé analisa o dia-a-dia da favela onde vive, enquanto Dadinho, agora Zé Pequeno (Leandro Firmino), se torna o temido chefe do tráfico da região, continuando com o legado de violência que remonta a décadas anteriores - e parece ser infinita. Considerado um dos melhores filmes da história do cinema brasileiro.",
  },
];

export default function Catalogo() {
  const router = useRouter();

  useEffect(() => {
    console.log("Catálogo carregado");
  }, []);

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.conteudo}
    >
      {filmes.map((filme) => (
        <FilmeCard
          key={filme.titulo}
          titulo={filme.titulo}
          genero={filme.genero}
          ano={filme.ano}
          sinopse={filme.sinopse}
          imagem={filme.imagem}
        />
      ))}
      <Botao titulo="Sobre o app" onPress={() => router.push("/sobre")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#141414" },
  conteudo: { padding: 16 },
});
