import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DonationScreen from './screen/DonationScreen';
import ARScreen from './screen/ARScreen';
import CardPaymentScreen from './screen/CardPaymentScreen';
import ReceiptScreen from './screen/ReceiptScreen';
import DetailScreen from './screen/DetailScreen';
const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="AR"
          component={ARScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="donate" component={DonationScreen} />
        <Stack.Screen name="payment" component={CardPaymentScreen} />
        <Stack.Screen name="ReceiptScreen" component={ReceiptScreen} />
        <Stack.Screen name="DetailScreen" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
