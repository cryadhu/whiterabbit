import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";

import Container from "../../component/container";
import TopProducts from "../../component/topProducts";
import ProductCollection from "../../component/productCollection";
import api from "./../../api";
import BannerImages from "../../component/bannerImages";
import ErrorView from "../../component/errorView";
import styles from "./styles";

export default Home = (props) => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTopProducts = async () => {
      try {
        const data = await api.fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    getTopProducts();
  }, []);

  if (loading) {
    return (
      <Container contentContainerStyle={styles.loadingContainer}>
        <ActivityIndicator />
      </Container>
    );
  }

  if (error) {
    return (
      <Container contentContainerStyle={styles.loadingContainer}>
        <ErrorView error={error} />
      </Container>
    );
  }

  return (
    <Container>
      <TopProducts data={products?.topProducts} />
      <ProductCollection data={products?.collections} />
      <BannerImages data={products?.banner} />
    </Container>
  );
};
