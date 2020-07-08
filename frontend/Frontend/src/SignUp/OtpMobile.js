import React,{Component} from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  SafeAreaView,
  Keyboard,
  Dimensions,
  ImageBackground,
  Alert
} from "react-native";
import { connect } from 'react-redux';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signup, signinFailed } from "../../../redux/ActionCreators";

const mapStateToProps = state => {
    return{
        user : state.user
    };
}

const mapDispatchToProps = dispatch => ({  
    signup: (props.user) => dispatch({name,email,password,contact})
})

class OtpMobile extends Component{
    constructor(props){
        super(props)
        this.state={
            pin1:"",
            pin2:"",
            pin3:"",
            pin4:"",
            flag1:0,
            flag2:0,
            flag3:0,
            flag4:0,
            isDisable:true,
            type:props.route.params.type
        }
    }

    componentDidMount=()=>{
        this.refs.ref1.focus();
    }

    checkOtp=()=>{
        let otp=this.state.pin1*1000+this.state.pin2*100+this.state.pin3*10+this.state.pin4*1;
        if(otp==1234)
        {
            if(this.state.type==="forgotPwd")
            {
                Alert.alert("Success","You can change your password successfully!");
                this.props.navigation.navigate("Change Password");
            }
            else{
                Alert.alert("Success","Mobile number verified successfully!");
                this.props.user.isValid=true;
                console.log(this.props.user.isValid);
                if(this.props.user.isValid)
                    this.props.navigation.navigate("Home");
            }
        }
        else
        {
            Alert.alert("Error","Invalid OTP!",[{text:"Try again"}]);
        }
    }

    render(){
        const {pin1,pin2,pin3,pin4}=this.state
        return(
            <SafeAreaView>
                <KeyboardAwareScrollView scrollEnabled={true}>
                    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                        <View style={{height:"100%",marginTop:30}}>
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
                                <View style={{marginTop:0}}>
                                    <Text style={styles.text}>Enter OTP sent to your mobile number : </Text>
                                    <View style={styles.container}>
                                        <TextInput
                                            ref={"ref1"}
                                            keyboardType={"numeric"}
                                            placeholder={"__"}
                                            onChangeText={(pin1)=>{
                                                this.setState({pin1:pin1})
                                                if(pin1!=""){
                                                    this.setState({flag1:1})
                                                    this.refs.ref2.focus()
                                                }
                                                if(pin1=="" && this.state.flag1==1){
                                                    this.setState({isDisable:true})
                                                    this.refs.ref1.focus()
                                                }
                                            }}
                                            value={pin1}
                                            maxLength={1}
                                            style={this.state.pin1!="" ? styles.boxFilled : styles.box}
                                        />
                                        <TextInput
                                            ref={"ref2"}
                                            keyboardType={"numeric"}
                                            placeholder={"__"}
                                            onChangeText={(pin2)=>{
                                                this.setState({pin2:pin2})
                                                if(pin2!=""){
                                                    this.setState({flag2:1})
                                                    this.refs.ref3.focus()
                                                }
                                                if(pin2=="" && this.state.flag2==1){
                                                    this.setState({isDisable:true})
                                                    this.refs.ref1.focus()
                                                }
                                            }}
                                            value={pin2}
                                            maxLength={1}
                                            style={this.state.pin2!="" ? styles.boxFilled : styles.box}
                                        />
                                        <TextInput
                                            ref={"ref3"}
                                            keyboardType={"numeric"}
                                            placeholder={"__"}
                                            onChangeText={(pin3)=>{
                                                this.setState({pin3:pin3})
                                                if(pin3!=""){
                                                    this.setState({flag3:1})
                                                    this.refs.ref4.focus()
                                                }
                                                if(pin3=="" && this.state.flag3==1){
                                                    this.setState({isDisable:true})
                                                    this.refs.ref2.focus()
                                                }
                                            }}
                                            value={pin3}
                                            maxLength={1}
                                            style={this.state.pin3!="" ? styles.boxFilled : styles.box}
                                        />
                                        <TextInput
                                            ref={"ref4"}
                                            keyboardType={"numeric"}
                                            placeholder={"__"}
                                            onChangeText={(pin4)=>{
                                                this.setState({pin4:pin4})
                                                if(pin4!=""){
                                                    this.setState({flag4:1})
                                                    this.setState({isDisable:false})
                                                }
                                                if(pin4=="" && this.state.flag4==1){
                                                    this.setState({isDisable:true})
                                                    this.refs.ref3.focus()
                                                }
                                            }}
                                            value={pin4}
                                            maxLength={1}
                                            style={this.state.pin4!="" ? styles.boxFilled : styles.box}
                                        />
                                    </View>
                                    <TouchableOpacity
                                        style={this.state.isDisable ? styles.submitDisable : styles.submit}
                                        onPress={() => this.checkOtp()}
                                        disabled={this.state.isDisable}
                                    >
                                        <Text style={{ textAlign: "center", color: "#fff",letterSpacing:0.5 }}>
                                        SUBMIT
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </ImageBackground>
                        </View>
                    </TouchableWithoutFeedback>
                </KeyboardAwareScrollView>
            </SafeAreaView>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OtpMobile);

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"space-evenly",
        flexDirection:"row",
        marginTop:13
    },
    text:{
        marginLeft:30,
        color: "#000",
        fontSize: 18
    },
    box:{
        backgroundColor:"#f5f4f2",
        fontWeight:"bold",
        alignSelf:"center",
        padding:12,
        paddingLeft:15,
        fontSize:24,
        height:55,
        width:"15%",
        borderRadius:7,
        borderWidth:1.5,
        borderBottomWidth:5,
        borderColor:"grey",
        alignItems:"center"
    },
    boxFilled:{
        backgroundColor:"#f5f4f2",
        fontWeight:"bold",
        alignSelf:"center",
        padding:12,
        paddingLeft:19,
        fontSize:24,
        height:55,
        width:"15%",
        borderRadius:7,
        borderWidth:1.5,
        borderBottomWidth:5,
        borderColor:"grey",
        alignItems:"center"
    },
    submit:{
        width: 100,
        height: 50,
        marginLeft: 125,
        //backgroundColor: "#E0E0E0",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 30,
        backgroundColor: "rgba(52,52,52, 1)",
        borderColor: "grey",
        borderWidth: 3,
    },
    submitDisable:{
        width: 100,
        height: 50,
        marginLeft: 125,
        backgroundColor: "silver",
        justifyContent: "center",
        marginTop: 50,
        marginBottom: 30,
        borderColor: "grey",
        borderWidth: 3,
    }
});