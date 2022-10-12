import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import NumberInput from '../component/NumberInput';
import PrimaryButton from '../component/PrimaryButton';

const DonationScreen = ({navigation, route}) => {
  // const [amount, setAmount] = useState(null);

  // useEffect(() => {
  //   console.log(route.params.charity);
  // }, []);

  // const handleSubmit = () => {
  //   navigation.navigate('payment', {
  //     charity: route.params.charity,
  //     donateAmount: amount,
  //   });
  // };

  // return (
  //   <View>
  //     <Text>Donation Organisation: {route.params.charity.name}</Text>
  //     <TextInput
  //       placeholder="0.00"
  //       keyboardType={'numeric'}
  //       value={amount}
  //       onChangeText={setAmount}
  //     />
  //     <TouchableOpacity onPress={handleSubmit}>
  //       <Text>Confirm</Text>
  //     </TouchableOpacity>
  //   </View>
  // );

  const [donateAmount, setDonateAmount] = useState(null);
  const {charity} = route.params;

  const handleSubmit = () => {
    navigation.navigate('payment', {
      charity: charity,
      donateAmount: donateAmount,
    });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={charity.imageUrl} />
      <Text>How much would you like to donate to {charity.name}?</Text>
      <View style={styles.inputContainer}>
        <NumberInput
          value={donateAmount}
          setter={setDonateAmount}
          placeholder={'Donation Amount'}
        />
        <PrimaryButton text={'Donate'} onPress={handleSubmit} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  inputContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: 200, height: 200},
});

export default DonationScreen;
