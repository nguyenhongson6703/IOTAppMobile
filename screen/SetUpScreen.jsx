import MaterialIcons  from '@react-native-vector-icons/material-icons';
import {Text, View , Image, StyleSheet , Switch, Button, Alert} from "react-native";
import Slider from '@react-native-community/slider';
import { useEffect, useState } from "react";
import { useAppContext } from '../AppContext';


function SettingScreen({navigation}){
    const {state, setState} = useAppContext();
    const [isEnabled, setIsEnabled] = useState(false);
    
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [sensitivity, setSensitivity] = useState(0);
    const getSensitivity = async () => {
        try{
          
            const url = `http://167.71.195.130/api/v1/auth/sensitivity?token=${state.token}`
            const response = await fetch(url, { method: 'GET'});
            const data = await response.json();
            setSensitivity(data.sensitivity);
          }catch(error){
            console.log('Error', error);
            Alert.alert(
              "Thông báo", 
              "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!", 
              [
                {text: 'OK', 
                  onPress: () => {
                    navigation.navigate('Login');
                  }
                }
              ]
            )
    
          }
    }
    const upDateSensitivity = async (newSensitivity) => {
        try{
           
            const url = `http://167.71.195.130/api/v1/auth/sensitivity?token=${state.token}&sensitivity=${parseInt(newSensitivity)}`
            const response = await fetch(url, { method: 'POST'});
            const data = await response.json();
            setSensitivity(newSensitivity);
            Alert.alert(
                "Thông báo", 
                "Thay đổi giá trị độ nhạy thành công" , 
                [
                    {
                        text: 'OK', 
                        onPress: () => {}
                    }
                ]
            );
            console.log("Message", data.message);
          }catch(error){
            console.log('Error', error);
            Alert.alert(
              "Thông báo", 
              "Phiên đăng nhập đã hết hạn. Vui lòng đăng nhập lại!", 
              [
                {text: 'OK', 
                  onPress: () => {
                    navigation.navigate('Login');
                  }
                }
              ]
            )
    
          }
    }
    useEffect(() => {   
        getSensitivity();

    }, [state.token]);
    function logoutHandler(){
        navigation.navigate('Login');
    }
    return (
        <View style = {styles.settingContainer}>
            <View style = {styles.containerInfo}>
                <View style = {styles.imageContainer}>
                    <Image style ={styles.image} source={require("../asset/images/logo-dut.jpg")}/>
                </View>
                <View style = {styles.containerTextInfo}>
                    <Text style = {styles.textInfo}><Text style = {styles.hightlightText}>Id:</Text> 102210076</Text>
                    <Text style = {styles.textInfo}><Text style = {styles.hightlightText}>Name</Text> ngoclamxyz</Text>
                </View>
                <View style = {styles.iconContainer}>
                    <MaterialIcons name="edit-note" size={36} color={"#02A9F7"}/>
                </View>
            </View>
            <View style = {styles.containerContentSetting}>
                <View style = {styles.containerSettingItem}>
                    <View style = {styles.containerSettingItemText}>
                        <Text style = {styles.settingItemText}>Độ nhạy</Text>
                    </View>
                    <View style = {styles.containerSettingItemButton}>
                        <Slider
                        value={sensitivity}
                        onSlidingComplete={(newValue) => upDateSensitivity(newValue)}
                        style={styles.sensitiveSlider}
                        minimumValue={0}
                        maximumValue={30}
                        step={1}
                        minimumTrackTintColor="#02A9F7"
                        maximumTrackTintColor="#02A9F7"
                        thumbTintColor='#02A9F7'
                        />
                    </View>
                    
                </View>
                <View style = {styles.containerSettingItem}>
                    <View style = {styles.containerSettingItemText}>
                        <Text style = {styles.settingItemText}>Giám sát</Text>
                    </View>
                    <View style = {styles.containerSettingItemButton}>
                        <Switch
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={isEnabled ? '#196cb2' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            />
                    </View>
                    
                </View>
                <View style = {styles.containerSettingItem}>
                    <View style = {styles.containerSettingItemText}>
                        <Text style = {styles.settingItemText}>Thông báo</Text>
                    </View>
                    <View style = {styles.containerSettingItemButton}>  
                        <Switch
                            trackColor={{false: '#767577', true: '#81b0ff'}}
                            thumbColor={isEnabled ? '#196cb2' : '#f4f3f4'}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={toggleSwitch}
                            value={isEnabled}
                            />

                    </View>
                    
                    
                </View>
                <View style = {styles.containerButton}>
                    <Button title="Log out" onPress={() => logoutHandler()}/>
                </View>


            </View>
    </View>
    )
    
}

export default SettingScreen;
const styles = StyleSheet.create({
    settingContainer: {
        padding: 32
    }, 
    imageContainer: {
        justifyContent: 'center', 
        alignItems: 'center', 
    }, 
    image: {
        width: 100, 
        height: 100, 
        borderRadius: 50,
        elevation: 4
    }, 
    containerInfo: {
        flexDirection: 'row', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        borderBottomWidth: 2, 
        paddingVertical: 12,
        borderBottomColor: '#d0d0d0'
    }, 
    containerTextInfo: {
        marginHorizontal: 12
    }, 
    iconContainer: {
       margin: 24,
        width: 40, 
        height: 40, 
    }, 
    containerContentSetting:{
        marginVertical: 36
    }, 
    containerSettingItem: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingVertical: 12,
        marginVertical: 12
        
    }, 
    containerSettingItemText: {
        flex: 1, 
        justifyContent: 'center', 

    }, 
    settingItemText: {
        fontFamily: 'OpenSans-Medium', 
        fontSize: 16,
    }, 
    containerSettingItemButton: {
        flex: 1, 
        justifyContent: 'center', 
    }, 
    sensitiveSlider: {
        width: '100%', 
        height: 40, 
        paddingVertical: 8
    }, 
    containerButton: {
        marginVertical: 24
    }, 
    hightlightText: {
        fontFamily: 'OpenSans-SemiBold', 
        fontSize: 18
    }, 
    textInfo: {
        fontFamily: 'OpenSans-Regular', 
        fontSize: 18, 
    }, 
  


})