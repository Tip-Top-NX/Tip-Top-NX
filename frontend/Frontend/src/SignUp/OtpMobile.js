import React,{Component} from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Keyboard,
  Dimensions
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default class OtpMobile extends Component{
    constructor(props){
        super(props)
        this.state={
            pin1="",
            pin2="",
            pin3="",
            pin4=""
        }
    }

    componentDidMount=()=>{
        this.refs.ref1.focus();
    }

    checkOtp=()=>{
        let otp=pin1*1000+pin2*100+pin3*10+pin4*1;
        if(otp==1234)
        {
            alert("Mobile number verified successfull!");
            navigation.navigate("Home");
        }
        else
        {
            alert("Invalid OTP!");
        }
    }

    render(){
        const {pin1,pin2,pin3,pin4}=this.state
        return(
            <View style={{flex:1}}>
                <View style={styles.container}>
                    <TextInput
                        ref={"ref1"}
                        onChangeText={(pin1)=>{
                            this.setState({pin1:pin1})
                            if(pin1!=""){
                                this.refs.ref2.focus()
                            }
                        }}
                        value={pin1}
                        maxLength={1}
                        style={styles.box}
                    />
                    <TextInput
                        ref={"ref2"}
                        onChangeText={(pin2)=>{
                            this.setState({pin2:pin2})
                            if(pin2!=""){
                                this.refs.ref3.focus()
                            }
                        }}
                        value={pin2}
                        maxLength={1}
                        style={styles.box}
                    />
                    <TextInput
                        ref={"ref3"}
                        onChangeText={(pin3)=>{
                            this.setState({pin3:pin3})
                            if(pin3!=""){
                                this.refs.ref4.focus()
                            }
                        }}
                        value={pin3}
                        maxLength={1}
                        style={styles.box}
                    />
                    <TextInput
                        ref={"ref4"}
                        onChangeText={(pin4)=>{
                            this.setState({pin4:pin4})
                            if(pin4!=""){
                                isDisabled=false
                            }
                        }}
                        value={pin1}
                        maxLength={1}
                        style={styles.box}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:0.6,
        justifyContent:"space-evenly",
        flexdirection:"row"
    },
    box:{
        backgroundColor:"#f5f4f2",
        fontWeight:"bold",
        alignSelf:"center",
        padding:10,
        fontSize:20,
        height:55,
        width:"10%",
        borderRadius:10,
        borderWidth:0.5,
        borderColor:"grey",
        alignItems:"center"
    }
});