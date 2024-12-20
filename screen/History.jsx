import {Text, View, Image, StyleSheet, Pressable, ScrollView, Alert, FlatList} from "react-native";
import MaterialIcons  from '@react-native-vector-icons/material-icons';
import HistoryItem from "../Components/HistoryItem";
import { useAppContext } from "../AppContext";
import { useEffect, useState } from "react";

function HistoryScreen({navigation}){
    const {state, setState} = useAppContext();
    const [histories, setHistories] = useState([]);
    const [cameraId, setCameraId] = useState('');
    function navigateToDetail(uuid){
      navigation.navigate('Detail', {
        uuid: uuid
      });
    }
    const [loading, setLoading] = useState(true);
    const getCameraId = async () => {
      try{

        const url = `http://167.71.195.130/api/v1/camera/getall?token=${state.token}`
        const response = await fetch(url, { method: 'GET'});
        if(response.ok){
          const data = await response.json();
          console.log("List camera", data);
          setCameraId(data[0].cameraId);
        }else{
          const errorData = await response.json();
          Alert.alert(
              "Thông báo", 
              errorData.error, 
              [
                  {
                      text: 'OK', 
                      onPress: () => {
                          navigation.navigate('Login');
                      } 
                  }
              ]

          );
        }

      }catch(error){
        console.log('Error get camera id: ', error);
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
    const getAllHistories = async () => {
      try{
        const url = `http://167.71.195.130/api/v1/detect/getall?token=${state.token}&cameraId=${cameraId}`
        const response = await fetch(url, { method: 'GET'});
        
        if(response.ok){
          const data = await response.json();
          setHistories(data);
          console.log('History data: ', histories);
          setLoading(false);
        }else{
          const errorData = await response.json();
          console.log("Error Data Loading Histories", errorData.error);
          setLoading(true);
        }
        
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
      getCameraId();
    }, []);
    useEffect(() => {
      getAllHistories();
    }, [cameraId]);
    const renderItem = ({item}) => (
      <HistoryItem navigateToDetail={() => {navigateToDetail(item.uuid)}}
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