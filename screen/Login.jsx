
import { useState } from "react";
import { useAppContext } from "../AppContext";
import CustomButton from "../Components/CustomButton";
import { Text, View, StyleSheet, Image, TextInput, KeyboardAvoidingView, Pressable, Alert } from "react-native";

function LoginScreen({navigation}){
    const {state, setState} = useAppContext();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginHandler = async () => {
        try{
            const response = await fetch('http://167.71.195.130/api/v1/auth/login', 
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
            setState({token: data.token});
            navigation.navigate('Main');

        }catch(error){
            console.log('Error', error);
            Alert.alert("Thông báo", 
                "Đăng nhập thất bại vui lòng kiểm tra lại thông tin", 
                [
                    {
                        text: 'OK', 
                        onPress: () => {
                            setPassword('');
                        }
                    }
                ]
            )
        }
    }
    function navigationToSignUp(){
        navigation.navigate('SignUp');
    }
    function navigationToMainScreen(){
        loginHandler();
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
                        <TextInput
                         value={username}
                         onChangeText={(text) => {setUsername(text)}}
                         style = {styles.inputUser} placeholder="Tên đăng nhập, email hoặc số điện thoại"></TextInput>
                    </View>
                    <View style = {styles.outerInput}>
                        <TextInput
                        value={password}
                        onChangeText={(text) => {setPassword(text)}}
                        secureTextEntry={true}
                        style = {styles.inputPassword} placeholder="Mật khẩu"></TextInput>
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