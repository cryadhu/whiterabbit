import React from "react";
import { View, Image, Text } from "react-native";

import styles from "./styles";

const ProductItem = ({ data, style }) => {
  console.log(data.imageUrl);
  return (
    <View style={[styles.container, style]}>
      <Image source={{ uri: data.imageUrl }} style={styles.image}></Image>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.off}>{data.off}</Text>
    </View>
  );
};

export default ProductItem;
