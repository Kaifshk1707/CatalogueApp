import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/auth/LoginScreen';
import SignUpScreen from './src/auth/SignUpScreen';
import GetStarted from './src/auth/GetStarted';
import SplashPage from './src/auth/SplashPage';
import ProductListScreen from './src/screens/ProductListScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import CategoriesScreen from './src/screens/CategoriesScreen';
import RatesScreen from './src/screens/RatesScreen';
import SelectionListScreen from './src/screens/SelectionListScreen';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="transparent" barStyle="light-content" />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Started" component={GetStarted} />
        <Stack.Screen name="SplashPage" component={SplashPage} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} />
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Rates" component={RatesScreen} />
        <Stack.Screen name="SelectionList" component={SelectionListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
