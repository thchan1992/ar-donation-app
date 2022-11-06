import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DonationScreen from './screen/DonationScreen';
import ARScreen from './screen/ARScreen';
import CardPaymentScreen from './screen/CardPaymentScreen';
import ReceiptScreen from './screen/ReceiptScreen';
import DetailScreen from './screen/DetailScreen';
import {headerColor, bgColor} from './util/styling';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: headerColor,
          },
          headerTintColor: 'white',
          contentStyle: {backgroundColor: bgColor},
        }}>
        <Stack.Screen
          name="AR"
          component={ARScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="donate"
          options={{title: ''}}
          component={DonationScreen}
        />
        <Stack.Screen
          name="payment"
          options={{title: ''}}
          component={CardPaymentScreen}
        />
        <Stack.Screen
          name="ReceiptScreen"
          options={{title: ''}}
          component={ReceiptScreen}
        />
        <Stack.Screen
          name="DetailScreen"
          options={{title: ''}}
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
