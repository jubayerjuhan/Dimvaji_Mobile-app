import React from 'react';
import { View } from 'react-native';
import Svg, { Path } from 'react-native-svg';

const Search_icon = ({ size = 20 }, style) => {

  return (
    <View style={style}>
      <Svg width={size} height={size} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M17 17L12.4286 12.4286M7.85714 14.7143C4.07005 14.7143 1 11.6442 1 7.85714C1 4.07005 4.07005 1 7.85714 1C11.6442 1 14.7143 4.07005 14.7143 7.85714C14.7143 11.6442 11.6442 14.7143 7.85714 14.7143Z" stroke="#333542" stroke-width="1.4" />
      </Svg>
    </View>
  );
}


export default Search_icon;