import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MainScreen } from './Screen/MainScreen';
import { createStackNavigator } from '@react-navigation/stack'
import { ContactdrawerScreen } from './Screen/NavigationScreen/DrawerNavigation/ContactdrawerScreen';
import { DetailsdrawerScreen } from './Screen/NavigationScreen/DrawerNavigation/DetailsdrawerScreen';
import { HomedrawerScreen } from './Screen/NavigationScreen/DrawerNavigation/HomedrawerScreen';
import { StartScreen } from './Screen/StartScreen';
import {LoginScreen} from './Screen/LoginScreen'
import {RegisterScreen} from './Screen/RegisterScreen'
import { ResetPasswordScreen } from './Screen/ResetPasswordScreen';
import {CustomSidebarMenu} from'./Screen/NavigationScreen/DrawerNavigation/CustomSidebarMenu';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator()


function AppStack(props) {
  return (
    <Drawer.Navigator initialRouteName="Home" 
      screenOptions={{
        activeTintColor: '#e91e63',
        itemStyle: { marginVertical: 5 },
      }}
      drawerContent={(props) => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen name="Home" component={MainScreen} />
      <Drawer.Screen name="Details" component={DetailsdrawerScreen}/>
      <Drawer.Screen name="Contact" component={ContactdrawerScreen} />
      <Drawer.Screen name="Homedrawer" component={HomedrawerScreen} />
    </Drawer.Navigator>
  );
}

export default function OnboardingStack(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="start">
        <Stack.Screen name="start" component={StartScreen} />
        <Stack.Screen name="login" component={LoginScreen} />
        <Stack.Screen name="register" component={RegisterScreen} />
        <Stack.Screen name="resetpwd" component={ResetPasswordScreen} />
        <Stack.Screen name="Apps" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
