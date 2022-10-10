import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';

const DonationScreen = ({navigation, route}) => {
  const [amount, setAmount] = useState(0);

  return (
    <View>
      <Text>Donation Organisation: {route.params.charityName}</Text>
    </View>
  );
};

export default DonationScreen;
