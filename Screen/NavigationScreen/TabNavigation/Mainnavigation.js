import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
// import { createStackNavigator } from '@react-navigation/stack';
import { DetailsScreen } from './BottomNavigationScreen/DetailsScreen';
import { ContactScreen } from './BottomNavigationScreen/ContactScreen';
import { HomeScreen } from './BottomNavigationScreen/HomeScreen';


export function MainScreen(props) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'ios-home';

          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Details') {
            iconName = 'ios-list';
          } else if (route.name === 'Contact') {
            iconName = 'ios-call';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
      <Tab.Screen name="Contact" component={ContactScreen} />
    </Tab.Navigator>
  );
}
