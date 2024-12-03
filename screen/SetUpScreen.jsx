import MaterialIcons  from '@react-native-vector-icons/material-icons';
import {Text, View , Image, StyleSheet , Switch, Button} from "react-native";
import Slider from '@react-native-community/slider';
import { useState } from "react";


function SettingScreen(){

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
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
                        style={styles.sensitiveSlider}
                        minimumValue={0}
                        maximumValue={30}
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
                    <Button title="Log out"/>
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