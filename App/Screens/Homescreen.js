import React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Screen from '../Components/Screen.js';
import IconHorizontal from '../Components/Homescreen/IconHorizontal.js';
import AppText from '../Components/AppText.js';
import GlobalStyle from '../Globalstyle.js'
import Appcolor from '../Appcolor.js';
import Globalstyle from '../Globalstyle.js';
import Categorycard from '../Components/Homescreen/Categorycard.js';
import PopularCategory from '../Components/Homescreen/PopularCategory.js';
import Categoryswipe from '../Components/Homescreen/Categoryswipe.js';

const Homescreen = () => {
  const categories = [
    { name: 'Bachelor Food' },
    { name: 'Diabetics Food' },
    { name: 'Breakfast Food' },
  ]
  return (
    <Screen style={styles.container}>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={[1]}
        style={{ minHeight: 200 }}
        keyExtractor={(item) => item.toString()}
        ListHeaderComponent={
          <>
            <IconHorizontal style={styles.iconHorizontal} />
            <View style={styles.greet}>
              <AppText style={styles.text} font="Montserrat_700Bold">Hello, Juhan!</AppText>
              <AppText style={styles.description}>Good morning, welcome back</AppText>
            </View>

            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.categoryCardWrapper}
              data={categories}
              keyExtractor={(item) => item.name}
              renderItem={({ item }) => (
                <Categorycard large style={styles.categoryCard} title={item.name} />
              )} />
          </>
        }

        ListFooterComponent={
          <>
            <PopularCategory title='Popular Category' />
            <Categoryswipe />
          </>
        }
        renderItem={({ item }) => (
          <></>
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({

  categoryCardWrapper: {
    marginTop: 25,
    paddingHorizontal: GlobalStyle.paddingLarge,
    maxHeight: 150,
  },
  greet: {
    paddingHorizontal: GlobalStyle.paddingLarge,
  },
  iconHorizontal: {
    paddingHorizontal: GlobalStyle.paddingMedium,
  },
  categoryCard: {
    marginRight: GlobalStyle.paddingMedium,
  },
  text: {
    fontSize: 32,
    marginTop: GlobalStyle.paddingMedium,
    color: Appcolor.primary,
  },
  description: {
    marginTop: Globalstyle.padding5,
    fontSize: 16,
  }
});

export default Homescreen;