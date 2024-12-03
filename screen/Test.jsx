import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import { getFontFamily } from '../Constant/Colors';
import MaterialIcons  from '@react-native-vector-icons/material-icons';
import { VLCPlayer } from 'react-native-vlc-media-player';


function Test(){
    console.log('light', getFontFamily('Inter_24pt', 'light'));
  console.log('normal', getFontFamily('Inter_24pt', 'normal'));
  console.log('bold', getFontFamily(weight='Inter_24pt', 'bold'));
  return ( 
    <SafeAreaView style= {styles.rooContainer}>
      <View>
        <Text>Normal text</Text>
      </View>
      <View>
        <Text style = {{fontFamily: getFontFamily('light'), textAlign: 'center'}}>Light text</Text>
      </View>
      <View>
        <Text style = {{fontFamily: getFontFamily('normal') , textAlign: 'center'}}>Normal text</Text>
      </View>
      <View >
        <Text style = {{fontFamily: 'yuji-mai-regular', fontSize: 24 , textAlign: 'center'}}>Bold text</Text>
      </View>
      <View>
        <MaterialIcons name='live-tv' size={24}/>
      </View>
      <View>
        <MaterialIcons name='history' size = {24}/>
      </View>
      <View>
        <MaterialIcons name='settings' size = {24} />
      </View>
      <View style = {{ borderWidth:1 , borderColor: 'red', justifyContent: 'center', alignItems: 'center',  flex: 1}}>
       
              <VLCPlayer
            style={{ width: '100%', height: 300 }}
            source={{ uri: 'http://167.71.195.130:8088/hls/stream1.m3u8' }}
            autoplay={true}
        />

        
      </View>
    </SafeAreaView>
  );
}
export default Test;

const styles = StyleSheet.create({
    rooContainer: {
      flex: 1,
      padding: 60, 
      justifyContent: 'center', 
  
    }, 
    
  });