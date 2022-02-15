import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Bagicon from '../../assets/Bagicon.js';
import Appcolor from '../Appcolor.js';
import Globalstyle from '../Globalstyle.js';
import AppText from './AppText.js';
import { AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';


const AppButton = ({ loading, title = 'Save', style, Icon = <AntDesign name="save" size={30} color={Appcolor.white} />, handlePress }) => {
  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={[styles.container, style]}>
        {!loading ?
          (<AppText font='Montserrat_600SemiBold' style={styles.text}>{title}</AppText>) :
          (<View style={styles.animation}>
            <LottieView
              autoPlay
              loop
              style={{
                width: 30,
                height: 30,
              }}
              source={require('../../assets/activiteIndicator.json')}
            />
          </View>)}
        {/* Lottie */}
        <View style={styles.iconContainer}>
          {Icon}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  animation: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  container: {
    minWidth: '40%',
    backgroundColor: Appcolor.primary,
    height: 70,
    borderRadius: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
  },
  iconContainer: {
    backgroundColor: Appcolor.secondary,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 14,
    width: '20%',
  },
  icon: {
    color: Appcolor.white,
  },
  text: {
    flex: 1,
    textAlign: 'center',
    color: Appcolor.white,
    fontSize: 18,
  }
});

export default AppButton;