import { View, StyleSheet, Text } from 'react-native';



const AppText = ({ children, style, font, ...otherProps }) => {

  return (
    <Text {...otherProps} style={[style, { fontFamily: font ? font : "Montserrat_400Regular", }]}>{children}</Text>
  );
}


export default AppText;