import Video from "react-native-video";
import { Text, View, StyleSheet , Pressable} from "react-native";
import MaterialIcons  from '@react-native-vector-icons/material-icons';
import { useEffect } from "react";
import { formatDate } from "../Components/HistoryItem";


function DetailScreen({route}){
    const {url, timeStart} = route.params; 

    return (
        <>
            <View style = {styles.rootContainer}>
                <View style={styles.container}>
                    <Text style={styles.text}>Chi tiết</Text>
                    <Pressable style = {styles.containerIcon} android_ripple={{color: "#ccced5"}}>
                        <MaterialIcons name="clear-all" size={24} color= '#02A9F7' />
                    </Pressable>
                    
                </View>
                <View style = {styles.contentContainer}>
                    <Video paused= {false} controls = {true} renderLoader = {() => (
                        <View>
                            <Video repeat={true} paused = {false} controls = {false}  style = {styles.video} source={require("../asset/video/loading-video.mp4") }/>

                        </View>)}
                    repeat={true} style = {styles.video} source={{uri: url}}/>
                </View>
                <View style = {styles.containerDetail} >

                    <Text style = {{padding: 12, fontFamily: "OpenSans-SemiBold", fontSize: 18, }}>
                        Thông tin chi tiết
                    </Text>
                    <View>
                        <View style = {[styles.flexRow , styles.containerDetailItem]}>
                            <View>
                                <MaterialIcons name="share-arrival-time" size={24} color= '#02A9F7' />
                            </View>                         
                            <Text style = {[styles.textDetailItem , styles.normalText]}><Text style = {styles.highlightText}>Thời gian </Text> {formatDate(timeStart)}</Text>
                        </View>
                        <View style = {[styles.flexRow , styles.containerDetailItem]}>
                            <View>
                                <MaterialIcons name="check-circle-outline" size={24} color= '#02A9F7'/>
                            </View>                     
                            <Text style = {[styles.textDetailItem , styles.normalText]}><Text style = {styles.highlightText}>Độ đáng tin cậy </Text> 88%</Text>
                        </View>
                    </View>


                </View>
            </View>

        </>
    )
}
export default DetailScreen;
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

    containerDetail: {
        padding: 12, 
        borderTopWidth: 2, 
        borderTopColor: '#aaa', 
        marginHorizontal: 24,
    }, 
    flexRow : {
        flexDirection: 'row', 
        justifyContent: 'flex-start'
    }, 
    containerDetailItem: {
        padding: 12,
    }, 
    textDetailItem: {
        marginLeft: 12,
    }, 
    highlightText: {
        fontFamily: 'OpenSans-Medium', 
       
        fontSize: 18, 
    }, 
    normalText: {
        fontFamily: 'OpenSans-Regular', 
        fontSize: 18, 
    }
    
    
})