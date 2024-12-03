
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

function App() {

  return ( 
    <SafeAreaView style= {styles.rooContainer}>
      <SettingScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rooContainer: {
    flex: 1,
  }, 
  
});

export default App;
