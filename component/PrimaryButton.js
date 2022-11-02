import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {buttonColor, borderColor} from '../util/styling';
import React from 'react';

const PrimaryButton = ({text, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {backgroundColor: buttonColor, borderColor: borderColor},
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.text,
          text.length > 8 ? styles.smallerText : styles.text,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 70,
    margin: 10,
    borderRadius: 8,
    borderRadius: 8,
    borderWidth: 1.5,
  },
  text: {
    alignSelf: 'center',
    padding: 16,
    fontWeight: 'bold',
    fontSize: 30,
  },
  smallerText: {
    alignSelf: 'center',
    paddingTop: 25,
    fontWeight: 'bold',
    fontSize: 17,
  },
});
