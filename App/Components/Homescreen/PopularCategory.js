import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Globalstyle from '../../Globalstyle.js';
import AppText from '../AppText.js';
import Colors from '../../Appcolor.js';
import Categorycard from './Categorycard.js';

const PopularCategory = ({ title }) => {
  const categories = [
    { name: 'Bachelor Food' },
    { name: 'Diabetics Food' },
    { name: 'Breakfast Food' },
  ]
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <AppText font='Montserrat_600SemiBold' style={styles.heading}>{title}</AppText>
      </View>
      <FlatList

        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryCardWrapper}
        data={categories}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Categorycard style={styles.categoryCard} title={item.name} />
        )}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 25,
  },
  container: {
    paddingHorizontal: Globalstyle.paddingLarge,
  },
  categoryCardWrapper: {
    marginTop: 20,
    paddingHorizontal: Globalstyle.paddingLarge,
  },
  heading: {
    fontSize: 20,
    color: Colors.primary
  },
  categoryCard: {
    marginRight: Globalstyle.paddingSmall,
  }
});

export default PopularCategory;