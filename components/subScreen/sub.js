import { Text, View, StyleSheet, Image } from "react-native";
import Colors from "../../constans/style";

function Sub({ name1, name2 }) {
  return (
    <View style={styles.titlesContainer}>
      <Text style={styles.titles}>{name1}</Text>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/subArrow.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.titles}>{name2}</Text>
    </View>
  );
}
export default Sub;

const styles = StyleSheet.create({
  titles: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    textAlign: "center",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  titlesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "white",
    padding: 1,
  },
  image: {
    resizeMode: "cover",
    width: 50,
    height: 60,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
