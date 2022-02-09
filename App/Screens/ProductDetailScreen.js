import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Dimensions } from 'react-native';
import Bagicon from '../../assets/Bagicon.js';
import Appcolor from '../Appcolor.js';
import AppButton from '../Components/AppButton.js';
import AppText from '../Components/AppText.js';
import BackBtn from '../Components/BackBtn.js';
import DescriptionComponent from '../Components/DescriptionComponent.js';
import IncrementDecrement from '../Components/IncrementDecrement.js';
import Screen from '../Components/Screen.js';
import Globalstyle from '../Globalstyle.js';


const ProductDetailScreen = () => {
  const windowWidth = Dimensions.get('window').width;
  return (
    <Screen style={styles.container}>
      <Image style={styles.image, { width: '100%', height: windowWidth }} source={{ uri: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/7ed0855435194229a525aad6009a0497_9366/Superstar_Shoes_White_EG4958_01_standard.jpg' }} />
      <AppText font='Montserrat_600SemiBold' style={styles.title}>Lenovo Yoga 920 13/Core i7/16GB/SSD 1TB</AppText>
      <DescriptionComponent title='Description' />

      <View style={styles.bottombtn}>
        <IncrementDecrement />
        <AppButton style={styles.btn} Icon={<Bagicon color={Appcolor.white} />} />
      </View>
      <View style={styles.header}>
        <BackBtn />
        <AppText style={styles.headerName}>Home / Lenovo Yoga 920...</AppText>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  title: {
    fontSize: 24,
    padding: Globalstyle.paddingMedium,
    color: Appcolor.primary
  },
  btn: {
    width: '60%',

  },
  bottombtn: {
    paddingHorizontal: Globalstyle.paddingLarge,
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    minHeight: 100,
    width: '100%',
    backgroundColor: Appcolor.white,
    elevation: 10,

    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    position: 'absolute',
    top: 40,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    paddingHorizontal: Globalstyle.paddingMedium,
    paddingVertical: Globalstyle.paddingSmall,
  },
  headerName: {
    fontSize: 16,
    paddingHorizontal: Globalstyle.paddingMedium,
    color: Appcolor.lightBlue
  }
});

export default ProductDetailScreen;