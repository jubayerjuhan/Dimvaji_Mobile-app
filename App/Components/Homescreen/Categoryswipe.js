import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Appcolor from '../../Appcolor.js';
import Globalstyle from '../../Globalstyle.js';
import { getProducts } from '../../Redux/Actions/productaction.js';
import AppText from '../AppText.js';
import ErrorRetry from '../ErrorRetry.js';
import LottieViewer from '../LottieView.js';
import ProductCard from '../ProductCard.js';

const Categoryswipe = ({ navigation }) => {
  const dispatch = useDispatch();
  const category = [
    { name: 'Bachelor Food', category: 'Bachelor Food Package', },
    { name: 'Diabetics Food', category: 'Diabetics Food', },
    { name: 'Breakfast Food', category: 'Breakfast Food', },
  ]
  const { products, loading, error } = useSelector(state => state.products);
  const [selectedCategory, setSelectedCategory] = useState(category[0]);

  useEffect(() => {
    fetchProducts();
  }, [selectedCategory])

  const fetchProducts = () => {
    dispatch(getProducts('', 0, 1, 100000, 1, selectedCategory.category));
  }

  const handleProductCardPress = (product) => {
    navigation.navigate('Product', { product });
  }


  return (
    <View style={styles.container}>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryCardWrapper}
        data={category}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <AppText
            style={item.category === `${selectedCategory.category}` ? styles.text : styles.textLight}
            font={item.category === `${selectedCategory.category}` ? "Montserrat_600SemiBold" : "Montserrat_400Regular"}
            onPress={() => setSelectedCategory({ ...selectedCategory, category: item.category })}
          >
            {item.name}
          </AppText>
        )}
      />

      {loading &&
        <View style={styles.loading}>
          <LottieViewer
            style={{ height: 300, width: '100%' }}
            source={require('../../../assets/loading-cart.json')} />
        </View>
      }


      {error &&
        <View style={styles.loading}>
          <ErrorRetry onPress={() => fetchProducts()} error={error} />
        </View>
      }

      {/* fetched product */}
      {(!loading && products) && <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        style={styles.productCardWrapper}
        data={products?.products}
        ItemSeparatorComponent={() => <View style={styles.separatorProductCard} />}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => handleProductCardPress(item)} />
        )}
      />}
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    // backgroundColor: 'red',

  },
  loading: {
    minHeight: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryCardWrapper: {
    // paddingHorizontal: Globalstyle.paddingLarge,
    marginHorizontal: Globalstyle.paddingLarge,
  },
  separator: {
    alignSelf: 'center',
    borderRadius: 50,
    marginHorizontal: Globalstyle.paddingSmall,
    height: 10,
    backgroundColor: '#E5E5E5',
    width: 10,
  },
  text: {
    color: Appcolor.primary,
    fontSize: 20,
  },
  textLight: {
    color: Appcolor.secondary,
    fontSize: 20,
  },
  productCardWrapper: {
    marginTop: 20,
    paddingHorizontal: Globalstyle.paddingLarge,
  },
  separatorProductCard: {
    height: 25,
  },
});

export default Categoryswipe;