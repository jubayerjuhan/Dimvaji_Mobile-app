

import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Bagicon = ({ size = 20 }, style) => {
  return (
    <View style={{ marginTop: 8 }}>
      <Svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M18 1H0M18 10.6H7.2M18 5.8H10.8" stroke="#333542" stroke-width="1.4" />
      </Svg>
    </View>
  );
}




export default Bagicon;

