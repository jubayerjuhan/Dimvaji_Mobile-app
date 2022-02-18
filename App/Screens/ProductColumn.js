import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Appcolor from '../Appcolor.js';
import AppHeader from '../Components/AppHeader.js';
import AppText from '../Components/AppText.js';
import LottieViewer from '../Components/LottieView.js';
import ProductCard from '../Components/ProductCard.js';
import Screen from '../Components/Screen.js';
import Globalstyle from '../Globalstyle.js';
import { getProducts } from '../Redux/Actions/productaction.js';
import ErrorRetry from '../Components/ErrorRetry.js';
import AppButton from '../Components/AppButton.js';

const ProductColumn = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);
  const { category } = route.params

  useEffect(() => {
    fetchProducts();
  }, [])

  const fetchProducts = () => {
    dispatch(getProducts('', 0, 1, 100000, 1, category));
  }

  // handlepress
  const handleProductPress = (product) => {
    navigation.navigate('Product', { product });
  }

  return (
    <Screen>
      <AppHeader abselute navigation={navigation} />
      <View style={styles.container}>
        <AppText font='Montserrat_600SemiBold' style={styles.title}>{category}</AppText>
        {(loading) && (
          <View style={styles.loading}>
            <LottieViewer
              style={{ height: 300, width: '100%' }}
              source={require('../../assets/loading-cart.json')} />
          </View>
        )
        }
        {error &&
          <View style={styles.error}>
            <ErrorRetry error={error} onPress={() => fetchProducts()} />
          </View>}
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          style={styles.list}
          columnWrapperStyle={styles.flatList}
          style={styles.list}
          numColumns={2}
          data={products?.products}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => (
            <ProductCard onPress={() => handleProductPress(item)} product={item}>Hello</ProductCard>
          )}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: Globalstyle.paddingLarge,
  },
  flatList: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  loading: {
    height: "70%",
    justifyContent: 'center',
    alignItems: "center",
  },

  error: {
    height: "100%",
    justifyContent: 'center',
    alignItems: "center",
  },
  separator: {
    height: 30,
    width: 30
  },
  title: {
    fontSize: 24,
    paddingBottom: 20,
    textAlign: 'center',
    color: Appcolor.primary,
  }
});

export default ProductColumn;