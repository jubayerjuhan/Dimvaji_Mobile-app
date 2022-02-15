import React, { useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Appcolor from '../Appcolor.js';
import AppText from '../Components/AppText.js';
import LottieViewer from '../Components/LottieView.js';
import ProductCard from '../Components/ProductCard.js';
import Screen from '../Components/Screen.js';
import Globalstyle from '../Globalstyle.js';
import { getProducts } from '../Redux/Actions/productaction.js';

const ProductColumn = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector(state => state.products);
  console.log(products?.products, 'pdpdpdpd');
  const { category } = route.params

  useEffect(() => {
    dispatch(getProducts('', 0, 1, 100000, 1, category));
  }, [])

  // handlepress
  const handleProductPress = (product) => {
    navigation.navigate('Product', { product });
  }

  return (
    <Screen>
      {(loading && !products) && <LottieViewer />}
      <View style={styles.container}>
        <AppText font='Montserrat_600SemiBold' style={styles.title}>{category}</AppText>

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
    // backgroundColor: 'red',
    alignItems: 'center',
  },
  list: {
    // paddingTop: 20,
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