/**
 * @format
 */

import {AppRegistry, AppState} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import NavigationService from './screen/NavigationService';
import messaging from '@react-native-firebase/messaging';
import notifee, {AndroidImportance, EventType} from '@notifee/react-native';

let notificationDisplayed = true;
const displayNotification = async (title, body) => {
    try{
        await notifee.requestPermission();
        const channelId = await notifee.createChannel({
            id: 'default', 
            name: 'Default channel', 
            vibration: true, 
            sound: 'default', 
            importance: AndroidImportance.HIGH, 
            vibrationPattern: [300, 500]
        });
        if(AppState.currentState !=='active' && !notificationDisplayed){
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
            notificationDisplayed=true;
        }

    }catch(error){
        console.log("Error", error);
    }
}
const backgroundMessageHandler = async (remoteMessage) => {
    if(remoteMessage){
        const {title, body} = remoteMessage.notification;
        await displayNotification(title, body);
        NavigationService.navigate('Main');

    }
}   
messaging().setBackgroundMessageHandler(backgroundMessageHandler);
messaging().getInitialNotification().then(async(remoteMessage)=>{
    if(remoteMessage){
        const {title, body} = remoteMessage.notification;
        await displayNotification(title, body);
        NavigationService.navigate('Login');
        
    }
});


AppRegistry.registerComponent(appName, () => App);

notifee.onForegroundEvent(async({type, detail})=>{
    switch(type){
        case EventType.DISMISSED:
            console.log("User dismissed notification", detail.notification);
            break;
        case EventType.PRESS:
            setTimeout(() => {
                NavigationService.navigate('Main');
            }, 1000);
            console.log("User pressed notification", detail.notification);
            break;
    }
});
notifee.onBackgroundEvent(async({type, detail})=>{
    switch(type){
        case EventType.DISMISSED:
            console.log("User dismissed notification", detail.notification);
            break;
        case EventType.PRESS:
            setTimeout(() => {
                NavigationService.navigate('Main');
            }, 1000);
            console.log("User pressed notification", detail.notification);
            break;
    }
});
