import React from "react";
import { View, FlatList, Text } from "react-native";
import { Button } from "react-native-elements";

import { string } from "../../assets/strings";
import { blue, white } from "../../assets/colors";

import styles from "./styles";
import ProductItem from "../productItem";

const ProductCollection = ({ data }) => {
  const renderItem = ({ item }) => <ProductItem data={item} />;

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.discountsTitle}>
          {string("collections.discount")}
        </Text>
        <Button titleStyle={styles.button} title="View All" color={white} />
      </View>
      <View style={styles.grindContainer}>
        <FlatList
          data={data}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={styles.columnWrapperStyle}
        />
      </View>
    </View>
  );
};

export default ProductCollection;
