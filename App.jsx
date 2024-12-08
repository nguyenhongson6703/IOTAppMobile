
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LoginScreen from './screen/Login';
import SignUpScreen from './screen/SignUp';
import MainScreen from './screen/Main';
import HistoryItem from './Components/HistoryItem';
import HistoryScreen from './screen/History';
import SettingScreen from './screen/SetUpScreen';
import DetailScreen from './screen/Detail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons  from '@react-native-vector-icons/material-icons';
import MainTabs from './MainTab';
import { AppProvider } from './AppContext';

import messaging from '@react-native-firebase/messaging';
import { useEffect } from "react";
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import NavigationService from './screen/NavigationService';

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
function App() {


  const getFcmToken = async () => {
    const token = await messaging().getToken();
    console.log("Token: ", token);
  }
  useEffect(() => {
      getFcmToken();
  }, []);
  useEffect(() => {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
          const {title, body } = remoteMessage.notification;
          displayNotification(title, body);
      });

      return unsubscribe;
    }, []);
  const displayNotification = async (title, body) => {
      await notifee.requestPermission();

      const channelId = await notifee.createChannel({
          id: 'default', 
          name: 'Default Channel', 
          vibration: true, 
          importance: AndroidImportance.HIGH, 
          vibrationPattern: [300, 500]
      });
      await notifee.displayNotification({
          title: title, 
          body: body, 
          android: {
              channelId, 
              importance: AndroidImportance.HIGH, 
              pressAction: {
                  id: 'default'
              }
          }
      });
  }



  return ( 
    <>
      <AppProvider>
        <NavigationContainer ref={(ref) => NavigationService.setTopLevelNavigator(ref) }>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {backgroundColor: '#02A9F7'}, 
              headerTintColor: 'white',
              headerTitle: ""

            }
            }
          >
            <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: true}}>

            </Stack.Screen>
            <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown: true}}>

            </Stack.Screen>
            <Stack.Screen name='Detail' component={DetailScreen} options={{headerShown: true}}/>
            <Stack.Screen name='Main' component={MainTabs} options={{headerShown: false}}/>
          </Stack.Navigator>

          
        </NavigationContainer>
      </AppProvider>
      
    </>
    
  );
}

const styles = StyleSheet.create({
  rooContainer: {
    flex: 1,
  }, 
  
});

export default App;
