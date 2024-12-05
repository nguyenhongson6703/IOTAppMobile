import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import MaterialIcons  from '@react-native-vector-icons/material-icons';
import { VLCPlayer } from 'react-native-vlc-media-player';
import Video from "react-native-video";

const videoSource =
  'https://skynewsau-live.akamaized.net/hls/live/2002689/skynewsau-extra1/master.m3u8';
function MainScreen(){
    const [loading, setLoading] = useState(true);
    const handleOnLoad = () => {
      setLoading(false);
    }

    return (
        <View style = {styles.rootContainer}>
            <View style={styles.container}>
                <Text style={styles.text}>Trực tiếp</Text>
                <Pressable style = {styles.containerIcon} android_ripple={{color: "#ccced5"}}>
                    <MaterialIcons name="notifications-active" size={24} color= '#02A9F7' />
                </Pressable>
                
            </View>
            <View style={styles.contentContainer}>
            {loading===true ? (
              <Video
                repeat={true}
                paused={false}
                controls={false}
                style={styles.video}
                source={require("../asset/video/loading-video.mp4")}
              />
            ):null}            
              <VLCPlayer
               onLoad={handleOnLoad}
                autoplay={true}
                style={[loading ?{width: 0 , height: 0}:styles.video]}
                source={{ uri: videoSource }}
              />
            </View>
        </View>
    )
}
export default MainScreen;

const styles = StyleSheet.create({
    rootContainer: {

    }, 
    container: {
      flexDirection: "row", // Sắp xếp theo chiều ngang
      justifyContent: "space-between", // Căn đều giữa các phần tử
      alignItems: "center", // Căn giữa theo chiều dọc
      padding: 16,
    },
    text: {
      flex: 1, // Chiếm không gian còn lại để Text nằm giữa
      textAlign: "center", // Căn giữa nội dung văn bản
      fontSize: 30,
      fontFamily: "OpenSans-Bold", 
      color: '#02A9F7'
    },
    containerIcon: {
        padding: 12
    }, 
    contentContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 50,
        elevation: 4
      },
      video: {
        width: 350,
        height: 275,
      },
  });