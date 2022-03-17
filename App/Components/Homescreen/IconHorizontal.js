import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Svg, { Circle, Rect, Path } from 'react-native-svg';
import SearchIcon from '../../../assets/search_icon.js';
import BagIcon from '../../../assets/Bagicon.js';
import HamburgerIcon from '../../../assets/HamburgerIcon.js';
import AppText from '../AppText.js';
import Appcolor from '../../Appcolor.js';
import { useDispatch, useSelector } from 'react-redux';
import { storeData } from '../../Store/StoreData.js';


const IconHorizontal = ({ style, navigation }) => {
  const [open, setOpen] = useState(false);
  const { user } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const icons = [
    { comp: <SearchIcon size={24} styles={styles.icon} />, route: 'Search' },
    { comp: <BagIcon size={24} styles={styles.icon} />, route: 'Cart' },
  ]

  const handleHamPress = () => {
    setOpen(!open);
  }

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
    // navigation.navigate('Auth');
    storeData('authToken', null);
    storeData('user', null);
  }
  return (
    <View style={[styles.container, style]}>

      <View style={user ? styles.profileIcon : ''} >
        {user && <AntDesign name="user" size={24} color="black" />}
      </View>
      <View style={styles.icons}>
        {icons.map((icon, index) => (
          <TouchableOpacity key={icon.route} onPress={() => navigation.navigate(icon.route)}>
            {icon.comp}
          </TouchableOpacity>
        ))}
        <TouchableOpacity onPress={handleHamPress}>
          <HamburgerIcon size={24} styles={styles.icon} />
        </TouchableOpacity>
      </View>
      {open &&
        <View style={styles.menu}>
          {/* <View style={styles.menuItem}>
            <AppText font={'Montserrat_600SemiBold'} style={styles.menuItemText}>My Account</AppText>
          </View> */}
          <TouchableOpacity style={[styles.menuItem, { marginBottom: 10 }]} onPress={() => navigation.navigate('Orders')}>
            <AppText font={'Montserrat_600SemiBold'} style={styles.menuItemText}>My Orders</AppText>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
            <AppText font={'Montserrat_600SemiBold'} style={styles.menuItemText}>Logout</AppText>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}



const styles = StyleSheet.create({
  menu: {
    position: 'absolute',
    top: '110%',
    right: 0,
    backgroundColor: 'white',
    zIndex: 1,
    padding: 20,
    borderRadius: 16,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  menuItemText: {
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Montserrat_700Bold',
    color: Appcolor.primary
  },
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