import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {image} from '../util/styling';
import {horizontalLine} from '../util/styling';
import PrimaryButton from '../component/PrimaryButton';

const DetailScreen = ({route, navigation}) => {
  const {charity} = route.params;
  return (
    <View style={styles.container}>
      <View style={[{alignItems: 'center'}, horizontalLine.horizontalLine]}>
        <Text style={styles.text}>{charity.name}</Text>
        <PrimaryButton
          text={'Donate'}
          onPress={() => {
            navigation.navigate('donate', {charity: charity});
          }}
        />
      </View>
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
