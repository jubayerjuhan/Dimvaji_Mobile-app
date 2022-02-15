import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Bagicon = ({ size = 20, color, style }) => {
  return (
    <View style={style}>

      <Svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M2.4 4H1.6V14.4C1.6 14.8243 1.76857 15.2313 2.06863 15.5314C2.36869 15.8314 2.77565 16 3.2 16H11.2C11.6243 16 12.0313 15.8314 12.3314 15.5314C12.6314 15.2313 12.8 14.8243 12.8 14.4V4H2.4ZM10.8944 1.6L9.6 0H4.8L3.5056 1.6H0V3.2H14.4V1.6H10.8944Z" fill="#C8C9D0" />
      </Svg>
    </View>
  );
}




export default Bagicon;