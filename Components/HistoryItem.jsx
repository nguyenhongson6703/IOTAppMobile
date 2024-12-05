import { View, Image, Text, StyleSheet, Pressable } from "react-native";


export const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Chuyển từ giây sang ms
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Tháng bắt đầu từ 0
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0'); // Lấy giờ và đảm bảo 2 chữ số
    const minutes = String(date.getMinutes()).padStart(2, '0'); // Lấy phút và đảm bảo 2 chữ số
    const seconds = String(date.getSeconds()).padStart(2, '0'); // Lấy giây và đảm bảo 2 chữ số

    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};
function HistoryItem({navigateToDetail, timeStart, timeEnd, urlImage}){


    return (
        <View style = {styles.historyItem}>
            <Pressable onPress={navigateToDetail} android_ripple={{color: "#b8b3b3"}}>
                <View>
                    <Image style = {styles.image} source={{uri : urlImage}}></Image>
                </View>
                
                <View style = {styles.containerDes}>
                    <Text style = {styles.textDes}>Bắt đầu vào: {formatDate(timeStart)}</Text>
                    <Text style = {styles.textDes}>Kết thúc vào: {formatDate(timeEnd)}</Text>
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