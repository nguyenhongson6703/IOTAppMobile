import {Text, View, Image, StyleSheet, Pressable, ScrollView, Alert, FlatList} from "react-native";
import MaterialIcons  from '@react-native-vector-icons/material-icons';
import HistoryItem from "../Components/HistoryItem";
import { useAppContext } from "../AppContext";
import { useEffect, useState } from "react";

function HistoryScreen({navigation}){
    const {state, setState} = useAppContext();
    const [histories, setHistories] = useState([]);
    function navigateToDetail(url, timeStart){
      navigation.navigate('Detail', {
        url: url, 
        timeStart: timeStart
      });
    }
    const [loading, setLoading] = useState(true);
    const getAllHistories = async () => {
      try{
        const cameraId = 'bbd39475'
        const url = `http://167.71.195.130/api/v1/detect/getall?token=${state.token}&cameraId=${cameraId}`
        const response = await fetch(url, { method: 'GET'});
        const data = await response.json();
        setHistories(data);
        console.log('History data: ', histories);
        setLoading(false);
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
      console.log('Token in history :',  state.token);
      getAllHistories();
    }, []);
    const renderItem = ({item}) => (
      <HistoryItem navigateToDetail={() => {navigateToDetail(item.video, item.beginTime)}}
        urlImage={item.thumbnail} timeStart={item.beginTime} timeEnd={item.endTime} key={item.uuid}  />
    )
    return (
        <>
            <View style = {styles.rootContainer}>
                <View style={styles.container}>
                    <Text style={styles.text}>Lịch sử</Text>
                    <Pressable onPress={() => {getAllHistories()}} style = {styles.containerIcon} android_ripple={{color: "#ccced5"}}>
                        <MaterialIcons name="filter-list" size={24} color= '#02A9F7' />
                    </Pressable>
                    
                </View>
                {loading===true?(
                  <View>
                    <Text>Loading histories......</Text>
                  </View>
                ): (
                  <View style={styles.listHistory}>
                      <FlatList
                        data={histories}
                        keyExtractor={(item) => item.uuid}
                        renderItem={renderItem}
                      />

                  </View>
                  
                )}
                
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
        
        marginBottom: 12, 
        paddingBottom: 12, 
        height: '80%', 
      }, 
      
      
})