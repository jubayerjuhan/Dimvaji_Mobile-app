import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import SearchIcon from '../../../assets/search_icon.js';
import BagIcon from '../../../assets/Bagicon.js';
import HamburgerIcon from '../../../assets/HamburgerIcon.js';


const IconHorizontal = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.profileIcon} >
        <AntDesign name="user" size={24} color="black" />
      </View>
      <View style={styles.icons}>
        <SearchIcon size={24} />
        <BagIcon style={styles.icon} size={24} />
        <HamburgerIcon style={styles.icon} size={24} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileIcon: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    width: 60,
    height: 60,
  },
  icon: {
    marginRight: 10,
  },
  icons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    minWidth: "25%",
  },
  img: {
    width: 24,
    height: 24,
  }
});

export default IconHorizontal;