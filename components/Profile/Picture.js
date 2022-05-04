import { StyleSheet, View, Text, Image } from "react-native";
import Colors from "../../constans/style";

function Picture() {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrapper}>
        <Image
          source={require("../../assets/check.jpg")}
          style={styles.theImage}
        />
      </View>
    </View>
  );
}
export default Picture;

const styles = StyleSheet.create({
  card: {
    
    // shadowColor: "black",
    // shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 6,
    // shadowOpacity: 0.25,
  },
  imageWrapper: {
    height: 120,
    width: 120,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary600,
    overflow: 'hidden',
    margin:36
  },
  theImage: {
    width: "100%",
    height: "100%",
  },
});
