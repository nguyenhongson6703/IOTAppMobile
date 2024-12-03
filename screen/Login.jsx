import CustomButton from "../Components/CustomButton";
import { Text, View, StyleSheet, Image, TextInput, KeyboardAvoidingView, Pressable } from "react-native";

function LoginScreen({navigation}){
    function navigationToSignUp(){
        navigation.navigate('SignUp');
    }
    function navigationToMainScreen(){
        navigation.navigate('Detail')
    }
    return (
        <KeyboardAvoidingView style = {styles.containerRoot}  behavior="position">
            <View style = {styles.containerImage}>
                <Image style = {styles.image} source={require("../asset/images/cam-picture.png")}/>

            </View>

            <View style = {styles.containerContent}>
                <Text style = {styles.title}>Đăng nhập</Text>
                <View style = {styles.containerInput}>
                    <View style = {styles.outerInput}>
                        <TextInput style = {styles.inputUser} placeholder="Tên đăng nhập, email hoặc số điện thoại"></TextInput>
                    </View>
                    <View style = {styles.outerInput}>
                        <TextInput style = {styles.inputPassword} placeholder="Mật khẩu"></TextInput>
                    </View>
                </View>
                
                <CustomButton title="Đăng nhập" onPress={navigationToMainScreen} />
                <View style = {styles.containerDes}>
                    < Text style = {styles.signUpDes}>Nếu chưa có tài khoản hãy  </Text>
                    <Pressable onPress={navigationToSignUp}
                     android_ripple={{color: "#ccced5"}}
                    style = {styles.containerHighlight}><Text style = {styles.highlight}>Đăng ký</Text></Pressable>
                </View>
                

            </View>
        </KeyboardAvoidingView>
    )

}
export default LoginScreen;
const styles = StyleSheet.create({
    containerRoot: {
        padding: 24
    }, 
    containerImage: {
        padding: 20, 
        justifyContent: 'center', 
        alignItems: 'center'

    }, 
    image: {
        width: 240, 
        height: 240
    }, 
    containerContent: {

    }, 
    title:{
        marginVertical: 12, 
        fontFamily: 'OpenSans-Bold', 
        fontSize: 30

    }, 
    containerInput: {
        marginVertical: 12,
        
    }, 
    outerInput:{
        marginVertical: 12,
        elevation: 4,
         
    }, 
    inputUser: {
        padding: 12, 
        borderWidth: 1, 
        borderColor: '#6c6e7b',
        borderRadius: 4, 

    }, 
    inputPassword: {
        padding: 12, 
        borderWidth: 1, 
        borderColor: '#6c6e7b',
        borderRadius: 4,
    }, 
    containerDes: {
        flexDirection: 'row',
        marginVertical: 6, 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: 12
    },
    signUpDes: {
        fontFamily: 'OpenSans-Light', 
        fontSize: 16, 
        marginTop: 4
    }, 
    highlight: {
        fontFamily: 'OpenSans-Bold', 
        fontSize: 20, 
        color: "#0B6EFE"
        
    }, 
    containerHighlight:{
        
    }
})