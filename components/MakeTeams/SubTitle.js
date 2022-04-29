import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constans/style";
import {useState} from 'react'

function Subtitle({ children, onPress }) {
  const [styleName, setStyleName] = useState(styles.subtitleContainer)
  const [styleText, setStyleText] = useState(styles.subtitle)
  return (
    
    <View style={styleName}>
      <Pressable onPress={onPress}>
        <Text style={styleText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: Colors.primary500,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  subtitleContainer: {
    padding: 10,
    borderBottomColor: "white",
    backgroundColor: Colors.primary700,
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    borderRadius:20,
    borderColor: Colors.primary500
  },
  pressed: {
    opacity: 0.75,
  },
});
