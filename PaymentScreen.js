import {View, Text, TextInput, Button, StyleSheet} from 'react-native';
import {useEffect, useState} from 'react';
import React from 'react';

const PaymentScreen = ({navigation, route}) => {
  const {donateAmount, charityName} = route.params;
  const [cardNum, setCardNum] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [expDate, setExpDate] = useState(null);

  const handlePayment = () => {
    console.log(charityName);
    console.log(cardNum, '\n', cvv, '\n', expDate, '\n');
    navigation.navigate('ReceiptScreen');
  };
  return (
    <View style={styles.container}>
      <Text>
        Your donation amount to {charityName} is: {donateAmount}
      </Text>
      <TextInput
        onChangeText={setCardNum}
        value={cardNum}
        placeholder="Card Number"
      />
      <TextInput onChangeText={setCvv} value={cvv} placeholder="CVV" />
      <TextInput
        onChangeText={setExpDate}
        value={expDate}
        placeholder="EXP DATE"
      />
      <Button title="Confirm" onPress={handlePayment} />
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
