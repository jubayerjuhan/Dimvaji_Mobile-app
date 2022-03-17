import React, { useEffect, useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import Globalstyle from '../../Globalstyle.js';
import AppText from '../AppText.js';
import Colors from '../../Appcolor.js';
import Categorycard from './Categorycard.js';
import client from '../../api/client.js';
import { TouchableWithoutFeedback } from 'react-native';


const PopularCategory = ({ title, navigation }) => {
  const [kitchens, setKitchens] = useState([]);
  useEffect(() => {
    client.get('/kitchens')
      .then(response => {
        setKitchens(response.data.kitchens ? response.data.kitchens : []);
      })
  }, [])

  const handleCardPress = (kitchen) => {
    navigation.navigate('Kitchen Column', { kitchen });
  }

  const handleViewAll = () => {
    navigation.navigate('All Kitchen')
  }
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <AppText font='Montserrat_600SemiBold' style={styles.heading}>{title}</AppText>
        <TouchableWithoutFeedback onPress={handleViewAll}>
          <AppText font='Montserrat_600SemiBold' style={styles.heading2}>View All</AppText>
        </TouchableWithoutFeedback>
      </View>
      <FlatList

        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryCardWrapper}
        data={kitchens}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Categorycard style={styles.categoryCard} title={item.name} item={item} onPress={() => handleCardPress(item)} />
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
    alignItems: "center",
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Globalstyle.paddingLarge,
  },
  categoryCardWrapper: {
    marginTop: 20,
    marginLeft: 20,
  },
  heading: {
    fontSize: 20,
    color: Colors.primary
  },
  heading2: {
    fontSize: 12,
    color: Colors.tertiary
  },
  categoryCard: {
    marginRight: Globalstyle.paddingSmall,
  }
});

export default PopularCategory;