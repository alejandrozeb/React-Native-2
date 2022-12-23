import React from "react";
import Contants from "expo-constants";
import { Text, View } from "react-native";

export default function Main() {
  return (
    <View style={{ marginTop: Contants.statusBarHeight, flexGrow: 1 }}>
      <Text>Rate Repository Application</Text>
    </View>
  );
}
