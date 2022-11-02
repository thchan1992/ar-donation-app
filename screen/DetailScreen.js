import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {image} from '../util/styling';

const DetailScreen = ({route, navigation}) => {
  const {charity} = route.params;
  return (
    <View style={styles.container}>
      <Image
        style={[image.image, {width: 100, height: 100}]}
        source={charity.imageUrl}
      />
      <Text style={styles.text}>{charity.name}</Text>
      <ScrollView>
        <Text style={styles.infoText}>{charity.info}</Text>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  image: {width: 200, height: 200},
  container: {flex: 1, alignItems: 'center', paddingTop: 10},
  text: {
    alignSelf: 'center',
    padding: 3,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 20,
    color: 'white',
  },
  infoText: {
    padding: 10,
    fontSize: 30,
    color: 'white',
  },
});
