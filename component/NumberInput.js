import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const NumberInput = ({
  value,
  setter,
  placeholder,
  height,
  maxWidth,
  minWidth,
  maxLength,
  isPound,
}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {isPound != null && <Text style={styles.poundsSign}>£</Text>}
      <TextInput
        textAlign={'center'}
        placeholderTextColor={'grey'}
        onChangeText={setter}
        maxLength={maxLength}
        style={[
          styles.input,
          {
            // minheight: height,
            fontSize: height,
            maxWidth: maxWidth,
            minWidth: minWidth,
          },
        ]}
        value={value}
        placeholder={placeholder}
        keyboardType="numeric"
      />
    </View>
  );
};

export default NumberInput;

const styles = StyleSheet.create({
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#FF304F',
    borderRadius: 8,
    // minheight: '100%',
    fontSize: 50,
    color: 'white',
    fontSize: 50,
    maxWidth: 200,
  },
  poundsSign: {
    fontSize: 50,
    color: 'white',
    paddingTop: 20,
  },
});
