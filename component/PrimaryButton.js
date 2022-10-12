import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';

const PrimaryButton = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    width: 100,
    margin: 10,
    borderRadius: 8,
    backgroundColor: 'grey',
  },
  text: {
    alignSelf: 'center',
    padding: 10,
  },
});
