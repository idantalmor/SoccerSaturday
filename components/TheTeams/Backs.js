import { StyleSheet, ImageBackground, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constans/style";
import { useNavigation } from "@react-navigation/native";

function Backs() {
  const navigation = useNavigation();

  function makeTeamsHandler() {
    navigation.navigate("ChoosePlayers");
  }
  return (
    <>
      <LinearGradient
        colors={[Colors.primary600, Colors.primary500]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("../../assets/BacksBackground.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <View style={styles.buttonContainer}>
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

export default Backs;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rootScreen: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    
  },
});
