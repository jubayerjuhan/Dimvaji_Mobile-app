import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Appcolor from '../../Appcolor.js';
import Globalstyle from '../../Globalstyle.js';
import AppText from '../AppText.js';
import ProductCard from '../ProductCard.js';

const Categoryswipe = () => {
  const category = [
    { name: 'Bachelor Food' },
    { name: 'Diabetics Food' },
    { name: 'Breakfast Food' },
  ]
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
          <AppText style={
            item.name === 'Bachelor Food' ? styles.text : styles.textLight
          }
            font={item.name === 'Bachelor Food' ? 'Montserrat_700Bold' : 'Montserrat_400Regular'}>{item.name}</AppText>
        )}
      />
      <FlatList
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        style={styles.productCardWrapper}
        data={category}
        ItemSeparatorComponent={() => <View style={styles.separatorProductCard} />}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ProductCard item={item} />
        )}
      >

      </FlatList>
    </View>

  );

}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  categoryCardWrapper: {

    paddingHorizontal: Globalstyle.paddingLarge,
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