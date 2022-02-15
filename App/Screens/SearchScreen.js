import React from 'react';
import { View, StyleSheet, TextInput, FlatList } from 'react-native';
import Search_icon from '../../assets/search_icon.js';
import Appcolor from '../Appcolor.js';
import AppHeader from '../Components/AppHeader.js';
import AppText from '../Components/AppText.js';
import HorizontalCard from '../Components/HorizontalCard.js';
import TextInputIcon from '../Components/Inputs/TextInputIcon.js';
import ProductCard from '../Components/ProductCard.js';
import Screen from '../Components/Screen.js';
import Globalstyle from '../Globalstyle.js';

const SearchScreen = () => {
  return (
    <Screen style={styles.container}>
      <AppHeader />
      <AppText style={styles.title} font='Montserrat_700Bold'>What are you
        looking for?</AppText>
      <TextInputIcon Icon={<Search_icon />} style={styles.input} />

      {/* search result */}
      <FlatList
        style={styles.list}
        data={[1, 2, 3, 4, 6]}
        keyExtractor={(item) => item.toString()}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item }) => (
          <HorizontalCard noBtn />
        )}
      />
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