import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';

const DonationScreen = ({navigation, route}) => {
  const [amount, setAmount] = useState(0);

  const handleSubmit = () => {
    navigation.navigate('payment', {
      charityName: route.params.charityName,
      donateAmount: amount,
    });
  };

  return (
    <View>
      <Text>Donation Organisation: {route.params.charityName}</Text>
      <TextInput
        placeholder="0.00"
        keyboardType={'numeric'}
        value={amount}
        onChangeText={setAmount}
      />
      <TouchableOpacity onPress={handleSubmit}>
        <Text>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DonationScreen;
