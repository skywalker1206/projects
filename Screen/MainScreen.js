import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { DetailsScreen } from './NavigationScreen/BottomNavigation/DetailsScreen';
import { ContactScreen } from './NavigationScreen/BottomNavigation/ContactScreen';
import { HomeScreen } from './NavigationScreen/BottomNavigation/HomeScreen';

export function MainScreen(props) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName = 'ios-home';

          if (route.name === 'HomeTab') {
            iconName = 'home-outline';
          } else if (route.name === 'DetailsTab') {
            iconName = 'ios-list';
          } else if (route.name === 'ContactTab') {
            iconName = 'ios-call';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="HomeTab" component={HomeScreen} />
      <Tab.Screen name="DetailsTab" component={DetailsScreen} />
      <Tab.Screen name="ContactTab" component={ContactScreen} />
    </Tab.Navigator>
  );
}
