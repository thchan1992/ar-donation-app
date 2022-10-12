import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const DetailScreen = ({route, navigation}) => {
  const {charity} = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={charity.imageUrl} />
      <Text>{charity.name}</Text>
      <Text>{charity.info}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  image: {width: 200, height: 200},
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
