import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Search_icon from '../../assets/search_icon.js';
import Appcolor from '../Appcolor.js';
import AppHeader from '../Components/AppHeader.js';
import AppText from '../Components/AppText.js';
import HorizontalCard from '../Components/HorizontalCard.js';
import LottieViewer from '../Components/LottieView.js';
import ProductCard from '../Components/ProductCard.js';
import Screen from '../Components/Screen.js';
import TextInputNormal from '../Components/TextInputNormal.js';
import Globalstyle from '../Globalstyle.js';
import { searchProduct } from '../Redux/Actions/productaction.js';

const SearchScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState(false);
  const { products, loading, error } = useSelector(state => state.search);

  useEffect(() => {
    if (keyword) {
      dispatch(searchProduct(keyword, 0, 1, 100000, 1, ''));
    }
  }, [keyword])

  const handleItemPress = (product) => {
    navigation.navigate('Product', { product });
  }

  console.log(products, 'products search1');
  return (

    <Screen style={styles.container}>

      <AppHeader navigation={navigation} />
      <AppText style={styles.title} font='Montserrat_700Bold'>What are you
        looking for?</AppText>
      <TextInputNormal
        setKeyword={setKeyword}
        Icon={<Search_icon />}
        style={styles.input}
        placeholder='Search for products'
        name='search' />

      {(loading) && (
        <View style={styles.loading}>
          <LottieViewer
            style={{ height: 300, width: '100%' }}
            source={require('../../assets/loading-cart.json')} />
        </View>
      )}
      {/* search result */}
      {!loading && <FlatList
        showsVerticalScrollIndicator={false}
        style={styles.list}
        data={products?.products}
        keyExtractor={(item) => item._id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <HorizontalCard noBtn product={item} onPress={() => handleItemPress(item)} />
        )}
      />}
    </Screen>
  );
}

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  list: {
    marginVertical: 10,
    paddingHorizontal: Globalstyle.paddingLarge,
  },
  title: {
    marginTop: Globalstyle.paddingSmall,
    maxWidth: '70%',
    fontSize: 30,
    lineHeight: 40,
    color: Appcolor.primary,
    paddingHorizontal: Globalstyle.paddingLarge
  },
  input: {
    marginVertical: 20,
    paddingHorizontal: 20,
  }

});

export default SearchScreen;