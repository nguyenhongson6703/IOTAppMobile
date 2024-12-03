import { View, Image, Text, StyleSheet, Pressable } from "react-native";

function HistoryItem(){
    return (
        <View style = {styles.historyItem}>
            <Pressable android_ripple={{color: "#b8b3b3"}}>
                <View>
                    <Image style = {styles.image} source={{uri : 'https://tuetinh.edu.vn/wp-content/uploads/2023/06/Thi-2.jpg'}}></Image>
                </View>
                
                <View style = {styles.containerDes}>
                    <Text style = {styles.textDes}>Thời gian: 12:00:00 Ngày 12 tháng 11 năm 2024</Text>
                    <Text style = {styles.textDes}>Mức độ đáng tin cậy: 90%</Text>
                </View>
            </Pressable>
            
        </View>
    )
}
export default HistoryItem;

const styles = StyleSheet.create({
    historyItem: {
        margin: 16, 
        borderRadius: 12,
        overflow: 'hidden', 
        borderWidth: 1, 
        borderColor: '#c2bdbd', 

      }, 
      image: {
        width: '100%', 
        height: 200

      }, 
      containerDes: {
        marginVertical: 12, 
        paddingHorizontal: 8
      }, 
      textDes: {
        marginVertical: 6, 
        fontFamily: 'OpenSans-Medium', 
        fontSize: 16
      }
})