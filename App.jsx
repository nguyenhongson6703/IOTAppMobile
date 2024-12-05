
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

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();
function App() {
  

  return ( 
    <>
      <AppProvider>
        <NavigationContainer>
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
