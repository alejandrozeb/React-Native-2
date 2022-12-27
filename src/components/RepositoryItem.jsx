import React from "react";
import { View, StyleSheet } from "react-native";
import StyledText from "./StyledText";


const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <StyledText big blue> id: {props.id}</StyledText>
      <StyledText bold> FullName: {props.fullName}</StyledText>
      <StyledText bold> Description: {props.description}</StyledText>
      <StyledText bold> Language: {props.language}</StyledText>
      <StyledText small> Start: {props.stargazersCount}</StyledText>
      <StyledText small> Forks: {props.forksCount}</StyledText>
      <StyledText small> Review: {props.reviewCount}</StyledText>
      <StyledText small> Rating: {props.ratingAverage}</StyledText>
      <StyledText small> ---------------------- </StyledText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  }
});

export default RepositoryItem;
