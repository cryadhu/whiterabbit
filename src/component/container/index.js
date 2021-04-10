import React from "react";
import { ScrollView } from "react-native";

import styles from "./styles";

const Container = ({ children, style, contentContainerStyle }) => {
  return (
    <ScrollView
      style={[styles.container, style]}
      contentContainerStyle={contentContainerStyle}
    >
      {children}
    </ScrollView>
  );
};

export default Container;
