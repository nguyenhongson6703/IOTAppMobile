import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons  from '@react-native-vector-icons/material-icons';
import MainScreen from './screen/Main'; // Giữ nguyên tên file của bạn
import HistoryScreen from './screen/History';
import SettingScreen from './screen/SetUpScreen';

const BottomTabs = createBottomTabNavigator();

function MainTabs() {
  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#02A9F7' },
        headerTintColor: 'white',
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#ebe8ed',
        tabBarStyle: { backgroundColor: '#02A9F7' },
      }}
    >
      <BottomTabs.Screen
        component={MainScreen}
        name="Livestream"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="live-tv" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        component={HistoryScreen}
        name="History"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="history" size={size} color={color} />
          ),
        }}
      />
      <BottomTabs.Screen
        component={SettingScreen}
        name="Setting"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />
    </BottomTabs.Navigator>
  );
}

export default MainTabs;
