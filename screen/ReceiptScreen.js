import {View, Text, Button} from 'react-native';
import React from 'react';
const ReceiptScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>Thanks for your donation</Text>
      <Button
        title="Completed"
        onPress={() => {
          navigation.replace('AR');
        }}
      />
    </View>
  );
};

export default ReceiptScreen;
