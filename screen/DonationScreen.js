import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import NumberInput from '../component/NumberInput';
import PrimaryButton from '../component/PrimaryButton';
import {instrucText} from '../util/styling';
import {image} from '../util/styling';
import {getAmountScreenMsg} from '../constants/msg';

const DonationScreen = ({navigation, route}) => {
  const [donateAmount, setDonateAmount] = useState(null);
  const {charity} = route.params;

  const showAlert = () => {
    Alert.alert(
      'Warning',
      'Please Insert the donation amount, or make sure donation amount is not larger than £1000.',
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
    );
  };

  const handleSubmit = () => {
    if (donateAmount == null || donateAmount == 0 || donateAmount > 1000) {
      showAlert();
    } else {
      navigation.navigate('payment', {
        charity: charity,
        donateAmount: donateAmount,
      });
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image style={image.image} source={charity.imageUrl} />

        <Text style={instrucText.instrucText}>
          {getAmountScreenMsg(charity.name)}
        </Text>
        <View style={styles.inputContainer}>
          <NumberInput
            value={donateAmount}
            setter={setDonateAmount}
            placeholder={'Amount'}
            height={40}
            maxWidth={160}
            minWidth={160}
            maxLength={6}
            isPound={true}
          />
          <PrimaryButton text={'Donate'} onPress={handleSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 10,
    height: 770,
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
