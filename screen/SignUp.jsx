import CustomButton from "../Components/CustomButton";
import {View, Text , StyleSheet,   Image ,
    TextInput, KeyboardAvoidingView, } from "react-native";

function SignUpScreen({navigation}){
    function navigationToSignUp(){
        navigation.navigate('Login');
    }

    return (
        <KeyboardAvoidingView style = {styles.containerRoot}  behavior="position">
            <View style = {styles.containerImage}>
                <Image style = {styles.image} source={require("../asset/images/cam-picture.png")}/>

            </View>

            <View style = {styles.containerContent}>
                <Text style = {styles.title}>Đăng ký</Text>
                <View style = {styles.containerInput}>
                    <View style = {styles.outerInput}>
                        <TextInput style = {styles.inputUser} placeholder="Nhập vào tên đăng nhập"></TextInput>
                    </View>
                    <View style = {styles.outerInput}>
                        <TextInput style = {styles.inputPassword} placeholder="Nhập vào mật khẩu"></TextInput>
                    </View>
                    <View style = {styles.outerInput}>
                        <TextInput style = {styles.inputPasswordAth} placeholder="Xác nhận mật khẩu"></TextInput>
                    </View>
                </View>
                
                <CustomButton title="Đăng ký" onPress={navigationToSignUp} />
                
            </View>
        </KeyboardAvoidingView>
    )
}
export default SignUpScreen;

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
        width: 120, 
        height: 120
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
    inputPasswordAth:{
        padding: 12, 
        borderWidth: 1, 
        borderColor: '#6c6e7b',
        borderRadius: 4,
    }

})