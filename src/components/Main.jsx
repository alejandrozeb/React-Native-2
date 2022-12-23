import React from "react";
import Contants from "expo-constants";
import { View } from "react-native";
import RepositoryList from "./RepositoryList";

export default function Main() {
  return (
    <View style={{ marginTop: Contants.statusBarHeight, flexGrow: 1 }}>
      <RepositoryList />
    </View>
  );
}
