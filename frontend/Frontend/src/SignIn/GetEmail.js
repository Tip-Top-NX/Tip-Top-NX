/* eslint-disable */
import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    ImageBackground,
    Image,
    SafeAreaView,
    StyleSheet
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

const GetEmail = () => {

    const navigation=useNavigation();
    
    const [email, setEmail] = useState("");
    const [valid, setValid] = useState(-1);

    const sendOtp = () => {
        navigation.navigate("Otp Email");
    };

    const validation = () => {

        const emailregex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

        if (email == "") {
        setValid(0);
        } else if (!emailregex.test(email)) {
        setValid(0);
        } else {
        setValid(1);
        }

        if(valid==1){
            sendOtp();
        }
    };

    return (
        <SafeAreaView>
            <KeyboardAwareScrollView scrollEnabled={true}>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.container}>
                        <ImageBackground
                            source={require("../../../assets/b1.jpg")}
                            style={{
                                flex: 1,
                                resizeMode: "cover",
                                justifyContent: "center",
                                width: "100%",
                                height: "100%",
                            }}
                            blurRadius={0}
                        >
                            <View>
                                <Text style={styles.text}>Please enter your registered email address : </Text>
                            </View>
                            <View style={[styles.inputContainer,valid==0 ? styles.error : null]}>
                                <TextInput
                                    style={styles.inputText}
                                    placeholder="EMAIL ADDRESS"
                                    placeholderTextColor="#666"
                                    onChangeText={(text) => setEmail(text)}
                                    value={email}
                                ></TextInput>
                            </View>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => validation()}
                            >
                                <Text style={styles.buttonText}>
                                    SEND OTP
                                </Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAwareScrollView>
        </SafeAreaView>        
    );
};

export default GetEmail;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        height: 600,
        width: "100%",
        backgroundColor: "#fff",
    },
    text:{
        marginLeft:29,
        marginRight:29,
        color: "#000",
        fontSize: 18,
        marginTop:-200
    },
    inputContainer: {
        width: 300,
        marginVertical: 10,
        height: 50,
        borderWidth: 1,
        borderColor: "#000",
        paddingLeft: 15,
        justifyContent: "center",
        alignSelf: "center",
        marginTop:-130
    },
    inputText: {
        height: 50,
        color: "#000",
        fontSize: 18,
    },
    button: {
        marginVertical: 10,
        width: 300,
        height: 50,
        backgroundColor:"rgba(0,0,0,1)",
        borderWidth: 1,
        justifyContent: "center",
        alignSelf: "center",
        padding: 5,
        marginTop:15
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 14,
        letterSpacing: 1,
    },
    error: {
        borderWidth: 3,
        borderColor: "red",
    }
});
