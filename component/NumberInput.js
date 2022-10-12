import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const NumberInput = ({value, setter, placeholder}) => {
  return (
    <TextInput
      onChangeText={setter}
      style={styles.input}
      value={value}
      placeholder={placeholder}
      keyboardType="numeric"
    />
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
