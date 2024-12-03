import {Text, View, Image, StyleSheet, Pressable, ScrollView} from "react-native";
import MaterialIcons  from '@react-native-vector-icons/material-icons';
import HistoryItem from "../Components/HistoryItem";

function HistoryScreen(){
    return (
        <>
            <View style = {styles.rootContainer}>
                <View style={styles.container}>
                    <Text style={styles.text}>Lịch sử</Text>
                    <Pressable style = {styles.containerIcon} android_ripple={{color: "#ccced5"}}>
                        <MaterialIcons name="filter-list" size={24} color= '#02A9F7' />
                    </Pressable>
                    
                </View>
                <ScrollView contentContainerStyle = {styles.listHistory} style = {styles.containerListHistory} >
                    <HistoryItem/>
                    <HistoryItem/>
                    <HistoryItem/>
                    <HistoryItem/>
                    <HistoryItem/>
                    <HistoryItem/>
                    <HistoryItem/>
                    <HistoryItem/>
                    <HistoryItem/>
                    <HistoryItem/>
                    <HistoryItem/>

                </ScrollView>
            </View>
            
        </>
    )
    
}

export default HistoryScreen;
const styles = StyleSheet.create({
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
      rootContainer: {
        flex: 1,
      }, 
      listHistory: {
        alignItems: 'center', 
        marginBottom: 12

      }, 
      containerListHistory: {
        paddingBottom: 12, 
        height: '80%'
      }
      
})