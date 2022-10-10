import React from 'react';
import {View, Text} from 'react-native';

const DetailScreen = ({route, navigation}) => {
  return (
    <View>
      <Text>{route.params.detail}</Text>
    </View>
  );
};

export default DetailScreen;
