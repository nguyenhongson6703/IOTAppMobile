import { useState } from "react";
import CustomButton from "../Components/CustomButton";
import {View, Text , StyleSheet,   Image ,
    TextInput, KeyboardAvoidingView,
    Alert, } from "react-native";

function SignUpScreen({navigation}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const signUpHandler = async () => {
        try{
            const response = await fetch('http://167.71.195.130/api/v1/auth/register', 
                {
                    method: 'POST', 
                    headers: {
                        'Content-Type': 'application/json',
                    }, 
                    body: JSON.stringify({
                        username: username, 
                        password: password
                    })
                }
            );
            const data = await response.json();
            Alert.alert(
                "Thông báo", 
                data.message, 
                [
                    {
                        text: 'Đến đăng nhập', 
                        onPress: () => {
                            navigation.navigate('Login');
                        }
                    }, 
                    {
                        text: 'Tiếp tục đăng kí', 
                        onPress: () => {
                            setUsername('');
                            setPassword('');
                            setPasswordAgain('');

                        }
                    }
                ]
            )
           
        }catch(error){
            console.log('Error', error);
            Alert.alert(
                "Thông báo", 
                "Đăng nhập thất bại. Vui lòng thử lại", 
                [
                    {
                        text: 'OK', 
                        onPress: () => {
                            setUsername('');
                            setPassword('');
                            setPasswordAgain('');
                        }
                    }
                ]
            )
            
        }
    }
    function navigationToSignUp(){
        // navigation.navigate('Login');
        if(password === passwordAgain && username != ''){
            signUpHandler();
            
        }else{
            Alert.alert(
                "Cảnh báo", 
                "Mật khẩu không hợp lệ hãy kiểm tra lại", 
                [
                    {text: 'OK', onPress: () => { 
                        setPassword('');
                        setPasswordAgain('');
                    }}
                ]
            )
        }
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
                        <TextInput
                         value={username}
                         onChangeText={(text) => setUsername(text)}
                         style = {styles.inputUser} placeholder="Nhập vào tên đăng nhập"></TextInput>
                    </View>
                    <View  style = {styles.outerInput}>
                        <TextInput
                        secureTextEntry={true}
                        value={password}
                        onChangeText={(text) => setPassword(text)} 
                        style = {styles.inputPassword} placeholder="Nhập vào mật khẩu"></TextInput>
                    </View>
                    <View style = {styles.outerInput}>
                        <TextInput 
                        secureTextEntry={true}
                        value={passwordAgain}
                        onChangeText={(text) => setPasswordAgain(text)}
                        style = {styles.inputPasswordAth} placeholder="Xác nhận mật khẩu"></TextInput>
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