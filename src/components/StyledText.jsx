import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.primary,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  colorSecondary: {
    color: theme.colors.textSecondary,
  },
  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subheading: {
    fontWeight: theme.fontSizes.subheading,
  },
  textAlignCenter: {
    textAlign: 'center'
  }
});

export default function StyledText({
  children,
  color,
  fontsize,
  fontWeight,
  align,
  style,
  ...restOfProps
}) {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontsize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold,
    align === 'center' && styles.textAlignCenter,
    style
  ];
  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  );
}
