import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constans/style";
import {useState} from 'react'

function Subtitle({ children, onPress }) {
  const [styleName, setStyleName] = useState(styles.subtitleContainer)
  const [styleText, setStyleText] = useState(styles.subtitle)

  function ChangeStyle(){
    setStyleName(styles.subtitleContainerPress)
    setStyleText(styles.subtitlePressed)
  }
  function check(){
  }
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
    color: "#e2b497",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitlePressed: {
    color: Colors.primary500,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: "white",
    backgroundColor: Colors.primary600,
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  subtitleContainerPress: {
    padding: 6,
    borderBottomColor: "white",
    backgroundColor: Colors.primary700,
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
  },
  pressed: {
    opacity: 0.75,
  },
});
