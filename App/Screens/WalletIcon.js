
import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const WalletIcon = ({ size = 20, color, style }) => {
  return (
    <View style={style}>

      <Svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M15.8571 6.14286V2.14286C15.8571 1.51168 15.3455 1 14.7143 1L2.14286 1C1.51168 1 1 1.51167 1 2.14286L1 13.5714C1 14.2026 1.51167 14.7143 2.14286 14.7143L14.7143 14.7143C15.3455 14.7143 15.8571 14.2026 15.8571 13.5714V9.57143M16.9208 5.57143H11.2857C10.0233 5.57143 9 6.59478 9 7.85714C9 9.11951 10.0233 10.1429 11.2857 10.1429H16.9208C16.9645 10.1429 17 10.1074 17 10.0636V5.65064C17 5.60689 16.9645 5.57143 16.9208 5.57143Z" stroke="white" stroke-width="1.2" />
      </Svg>
    </View>
  );
}




export default WalletIcon;

