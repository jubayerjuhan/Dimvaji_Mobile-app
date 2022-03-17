import { View, StyleSheet } from 'react-native';
import AppText from '../Components/AppText.js';
import React, { useEffect, useState } from 'react';
import Appcolor from '../Appcolor.js';
import AppHeader from '../Components/AppHeader.js';
import LottieViewer from '../Components/LottieView.js';
import ProductCard from '../Components/ProductCard.js';
import Screen from '../Components/Screen.js';
import Globalstyle from '../Globalstyle.js';
import { getProducts } from '../Redux/Actions/productaction.js';
import ErrorRetry from '../Components/ErrorRetry.js';
import AppButton from '../Components/AppButton.js';
import { FlatList } from 'react-native';
import { useDispatch } from 'react-redux';
import client from '../api/client.js';
import Categorycard from '../Components/Homescreen/Categorycard.js';

const AllKitchen = ({ navigation }) => {
  const [kitchens, setKitchens] = useState([])
  useEffect(() => {
    client.get('/kitchens').then((res) => {
      if (res.ok) {
        setKitchens(res.data.kitchens)
      }
    })
  }, [])
  const handleCardPress = (kitchen) => {
    navigation.navigate('Kitchen Column', { kitchen });
  }


  return (
    <Screen>
      <AppHeader abselute navigation={navigation} />
      <View style={styles.container}>
        <AppText font='Montserrat_600SemiBold' style={styles.title}>All Kitchens</AppText>
        {(false) && (
          <View style={styles.loading}>
            <LottieViewer
              style={{ height: 300, width: '100%' }}
              source={require('../../assets/loading-cart.json')} />
          </View>
        )
        }
        {false &&
          <View style={styles.error}>
            <ErrorRetry error={error} onPress={() => { }} />
          </View>}
        <FlatList
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          style={styles.list}
          columnWrapperStyle={styles.flatList}
          numColumns={2}
          data={kitchens}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <Categorycard onPress={() => { handleCardPress(item) }} style={styles.categoryCard} title={item.name} item={item} />

            // <ProductCard onPress={() => {
            //   navigation.navigate('Product', { product: item });
            // }} product={item} />
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

export default AllKitchen;