import { StyleSheet, ImageBackground, View, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../../constans/style";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-web";


function GoalKeeper() {
  return (
    <>
      <LinearGradient
        colors={[Colors.primary500, Colors.primary600]}
        style={styles.rootScreen}
      >
        <ImageBackground
          source={require("../../assets/GoalkeeperBackground.jpg")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}
        >
          <View>
          </View>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

export default GoalKeeper;

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
