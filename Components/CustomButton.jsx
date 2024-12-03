import { Pressable, View, Text, StyleSheet  } from "react-native";

function CustomButton({title, onPress}){
    return (
        <View style = {styles.buttonOuterContainer}>
            <Pressable style = {({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed]: [styles.buttonInnerContainer] }
                android_ripple={{color: "#56bdf1"}} onPress={onPress}>
                <Text style = {styles.buttonText} >{title}</Text>
            </Pressable>
        </View>
    )
}
export default CustomButton;

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28, 
        margin: 4, 
        overflow: "hidden"
    }, 
    buttonInnerContainer: {
        backgroundColor: '#0B6EFE', 
        paddingVertical: 12, 
        paddingHorizontal: 16, 
        elevation: 2, 
    }, 
    pressed: {
        opacity: 0.75
    }, 
    buttonText: {
        color: 'white', 
        fontWeight : 'bold', 
        textAlign: 'center', 
        fontSize: 20
    }
})