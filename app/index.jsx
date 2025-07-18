import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from "../assets/favicon.png"

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img}/>
      <Text style={[styles.title, {fontFamily: "Inter"}]}>Welcome to TuckshopPro!</Text>
      <Text style={{marginTop: 10, marginBottom: 30, fontFamily: "Inter", color: "#ffffff"}}>Log in or sign up</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgb(35, 28, 43)",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        color: "#ffffff",
        fontWeight: "bold",
        fontSize: 18
    },
    img: {
        marginVertical: 20
    },
})