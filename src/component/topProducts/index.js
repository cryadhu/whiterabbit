import React from "react";
import { View, Image, Text } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

import styles from "./styles";

const TopProducts = ({ data }) => {
  const images = data?.map((item) => item.imageUrl);
  return (
    <View style={styles.container}>
      <SliderBox images={images} />
    </View>
  );
};

export default TopProducts;
