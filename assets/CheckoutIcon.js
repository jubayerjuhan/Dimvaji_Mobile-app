import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const CheckoutIcon = ({ size = 20, color, style }) => {
  return (
    <View style={style}>

      <Svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M1 1L1.68571 3.28571M1.68571 3.28571L4.42857 12.4286H17V5.57143C17 4.30906 15.9767 3.28571 14.7143 3.28571H1.68571ZM14.7143 17C14.0831 17 13.5714 16.4883 13.5714 15.8571C13.5714 15.226 14.0831 14.7143 14.7143 14.7143C15.3455 14.7143 15.8571 15.226 15.8571 15.8571C15.8571 16.4883 15.3455 17 14.7143 17ZM5.57143 15.8571C5.57143 15.226 6.0831 14.7143 6.71429 14.7143C7.34547 14.7143 7.85714 15.226 7.85714 15.8571C7.85714 16.4883 7.34547 17 6.71429 17C6.0831 17 5.57143 16.4883 5.57143 15.8571Z" stroke="white" stroke-width="1.2" />
      </Svg>
    </View>
  );
}




export default CheckoutIcon;