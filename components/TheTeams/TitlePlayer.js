import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constans/style";

function TitlePlayer({ name, number }) {
  return (
      <Text style={styles.title}>{name}  #{number}</Text>
  );
}

export default TitlePlayer;

const styles = StyleSheet.create({
  title: {
    fontSize: 12,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 12,
    backgroundColor: Colors.primary700,
    borderRadius:4,
  },
});
