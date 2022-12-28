import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";
import RepositoryStats from "./RepositoryStats";

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText fontsize="subheading" fontWeight="bold">
        FullName: {props.fullName}
      </StyledText>
      <StyledText> Description: {props.description}</StyledText>
      <StyledText> Language: {props.language}</StyledText>
      <RepositoryStats {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
});

export default RepositoryItem;
