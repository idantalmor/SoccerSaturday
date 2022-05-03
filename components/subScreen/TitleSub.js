import { Text, View, StyleSheet } from "react-native";
import Colors from "../../constans/style";

function TitleSub({ children }) {
  return (
    <View style={styles.titleContainer}>
      <Text style={styles.titles}>{children}</Text>
    </View>
  );
}
export default TitleSub;

const styles = StyleSheet.create({
  titles: {
    fontWeight: "bold",
    fontSize: 40,
    color: Colors.primary500,
    textAlign: "center",
    padding: 12,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },

  
  },
  titleContainer: {
    padding: 6,
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});
