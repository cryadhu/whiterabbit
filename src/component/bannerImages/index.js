import React from "react";
import { View } from "react-native";
import { SliderBox } from "react-native-image-slider-box";

import styles from "./styles";

const BannerImages = ({ data, style }) => {
  return (
    <View style={[styles.container, style]}>
      <SliderBox images={data} autoplay circleLoop dotStyle={styles.dot}/>
    </View>
  );
};

export default BannerImages;
