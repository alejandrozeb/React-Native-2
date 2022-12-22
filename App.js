import React from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => Alert.alert("Hemos tocado el texto")}
      >
        <Text>Hola mundo</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
