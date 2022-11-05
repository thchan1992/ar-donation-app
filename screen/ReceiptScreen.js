import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import PrimaryButton from '../component/PrimaryButton';
import {instrucText} from '../util/styling';
import {completedMsg} from '../constants/msg';

const ReceiptScreen = ({navigation, route}) => {
  const handleCompleted = () => {
    navigation.replace('AR');
  };
  return (
    <View style={styles.container}>
      <Text style={instrucText.instrucText}>
        {completedMsg(route.params.charity.name, route.params.donateAmount)}
      </Text>
      <PrimaryButton text={'Done'} onPress={handleCompleted} />
    </View>
  );
};

export default ReceiptScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
