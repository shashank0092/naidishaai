import { View, Text } from 'react-native';
import { useGlobalStyles } from '../config/globalStyles';
import React from 'react';

const Test = () => {
  const globalStyles = useGlobalStyles();
  return (
    <View style={globalStyles.centeredContainer}>
      <Text style={[globalStyles.h1, globalStyles.textError]}>
        Welcome To NaidishAi
      </Text>
      <Text style={[globalStyles.body, { marginTop: 16 }]}>Now AI For All</Text>
    </View>
  );
};

export default Test;
