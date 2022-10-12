import {View, Text, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import NumberInput from '../component/NumberInput';
import PrimaryButton from '../component/PrimaryButton';

const CardPaymentScreen = ({navigation, route}) => {
  const {charity, donateAmount} = route.params;
  const [cardNum, setCardNum] = useState(null);
  const [cvv, setCvv] = useState(null);
  const [expDate, setExpDate] = useState(null);
  const handlePayment = () => {
    navigation.navigate('ReceiptScreen', {
      charity: charity,
      donateAmount: donateAmount,
    });
  };
  return (
    <View style={styles.container}>
      <Text>
        Your donation amount to {charity.name} is: {donateAmount}
      </Text>
      <NumberInput
        value={cardNum}
        setter={setCardNum}
        placeholder={'Card Number'}
      />
      <NumberInput value={cvv} setter={setCvv} placeholder={'CVV'} />
      <NumberInput
        value={expDate}
        setter={setExpDate}
        placeholder={'EXP DATE'}
      />
      <PrimaryButton text="Confirm" onPress={handlePayment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default CardPaymentScreen;
