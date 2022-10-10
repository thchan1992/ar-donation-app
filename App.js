import React, {useState, useContext, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Modal} from 'react-native';
import {
  ViroARScene,
  ViroText,
  ViroConstants,
  ViroARSceneNavigator,
  ViroBox,
  ViroButton,
  Viro360Image,
  Viro3DObject,
  ViroARTrackingTargets,
  ViroARImageMarker,
  ViroMaterials,
  ViroARCamera,
} from '@viro-community/react-viro';
import {StateContext} from './context';
import StateContextProvider from './context';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DonationScreen from './DonationScreen';
import AR from './AR';
import PaymentScreen from './PaymentScreen';
import ReceiptScreen from './ReceiptScreen';
const Stack = createNativeStackNavigator();
export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="AR" component={AR} options={{headerShown: false}} />
        <Stack.Screen name="donate" component={DonationScreen} />
        <Stack.Screen name="payment" component={PaymentScreen} />
        <Stack.Screen name="ReceiptScreen" component={ReceiptScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
