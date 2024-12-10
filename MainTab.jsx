import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons  from '@react-native-vector-icons/material-icons';
import MainScreen from './screen/Main'; // Giữ nguyên tên file của bạn
import HistoryScreen from './screen/History';
import SettingScreen from './screen/SetUpScreen';

import messaging from '@react-native-firebase/messaging';
import { useEffect } from "react";
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';
import { useAppContext } from './AppContext';
import { Alert } from 'react-native';


const BottomTabs = createBottomTabNavigator();

function MainTabs({navigation}) {
  const {state, setState} = useAppContext();

  const getFcmToken = async () => {
    const token = await messaging().getToken();
    console.log("Token: ", token);
    try{
      const response = await fetch(`http://167.71.195.130/api/v1/auth/fcm?token=${state.token}&fcm_token=${token}`, 
          {
              method: 'POST', 
          }
      );
      if(response.ok){
        Alert.alert(
          "Thông báo", 
          "Cập nhật Firebase clound messaging thành công!", 
          [
            {
              text: 'OK', 
            }
          ]
        );
      }else{
          const errorData = await response.json();
          Alert.alert(
              "Thông báo", 
              errorData.error, 
              [
                  {
                      text: 'OK', 
                      onPress: () => {
                          navigation.navigate('Login');
                      } 
                  }
              ]

          );

      }


    }catch(error){
      console.log("Error update fcm ", error);
    }
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
