
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

const Stack = createNativeStackNavigator();

function App() {

  return ( 
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#02A9F7'}
          }
          }
        >
          <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}>

          </Stack.Screen>
          <Stack.Screen name='SignUp' component={SignUpScreen} options={{headerShown: false}}>

          </Stack.Screen>
          <Stack.Screen name='Detail' component={DetailScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
      </NavigationContainer>

      
    </>
    
      
    
  );
}

const styles = StyleSheet.create({
  rooContainer: {
    flex: 1,
  }, 
  
});

export default App;
