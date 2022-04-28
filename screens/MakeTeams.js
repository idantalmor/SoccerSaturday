import { FlatList, StyleSheet, ImageBackground } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constans/style";


function MakeTeams(){
    return(

        <LinearGradient
        colors={[Colors.primary500, Colors.primary600]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("../assets/background2.jpeg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
        </ImageBackground>
      </LinearGradient>
    )
}

export default MakeTeams

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    rootScreen: {
        flex: 1,
      },
      backgroundImage: {
        opacity: 0.15,
      },
})