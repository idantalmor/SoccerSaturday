import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../constans/style";
import {useState} from 'react'

function Subtitle({ children, onPress }) {
  const [styleName, setStyleName] = useState(styles.subtitleContainer)
  const [styleText, setStyleText] = useState(styles.subtitle)
  return (
    
    <View style={styleName}>
      <Pressable onPress={onPress} style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }>
        <Text style={styleText}>{children}</Text>
      </Pressable>
    </View>
  );
}
export default Subtitle;

const styles = StyleSheet.create({
  subtitle: {
    color: Colors.primary500,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  subtitleContainer: {
    padding: 8,
    borderBottomColor: Colors.primary600,
    backgroundColor: Colors.primary700,
    borderBottomWidth: 2,
    marginHorizontal: 12,
    marginVertical: 4,
    borderRadius:15,
    borderColor: Colors.primary600
  },
  pressed: {
    opacity: 0.3,
    backgroundColor: Colors.primary600
  },
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
  },
});
