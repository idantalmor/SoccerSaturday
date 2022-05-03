import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";

function Shirt({ name, number }) {
  return (
    <View style={styles.imageWrapper}>
      <ImageBackground
        style={styles.theImage}
        source={require("../../assets/shirt.png")}
      >
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>{name}</Text>
          <View style={styles.numberStyle}>
            <Text style={styles.numberStyle2}>{number}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

export default Shirt;

const styles = StyleSheet.create({
  imageWrapper: {
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  theImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontWeight: "bold",
    fontSize: 12,
  },
  numberStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  numberStyle2: {
    fontWeight: "bold",
    fontSize: 20,
  },
  textContainer: {
    paddingVertical: 10,
  },
});
