import React from "react";
import { Text } from "react-native";

const ErrorView = ({ error }) => {
  return <Text>{error.message}</Text>;
};

export default ErrorView;
