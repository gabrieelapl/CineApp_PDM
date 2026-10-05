import {StyleSheet, Text, View, Image} from "react-native"
import {SafeAreaView} from "react-native-safe-area-context"

export default function Home() {
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.titulo}>CineApp</Text>
                    <Text style={styles.descricao}>Catálogo de filmes</Text>
                    <View style={styles.botao}>
                        <Text style={styles.textoBotao}>
                            Começar
                        </Text>
                    </View>
                    <Image 
                        source={require("../assets/images/logo.jpeg")} 
                        style={styles.logo}    
                        resizeMode="contain"          
                    />
                </View>    
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#F3F4F6",
        padding:20
    },
    titulo:{
        fontSize:34,
        fontWeight:"bold",
        color:"#2563EB",
        marginBottom:10
    },
    descricao:{
        fontSize:18,
        textAlign:"center",
        marginTop:15,
        color:"#555",
        lineHeight:26,
        marginBottom:20
    },
    logo:{
        width:120,
        height:120,
        marginBottom:20
    },
    card:{
        backgroundColor: "#FFFFFF",
        padding: 30,
        borderRadius: 20,
        alignItems: "center",
    },
    botao:{
        backgroundColor: "#2563EB",
        paddingVertical:15,
        paddingHorizontal:40,
        borderRadius:10
    },
    textoBotao:{
        color:"#FFF",
        fontWeight:"bold",
        fontSize:18
    }
});