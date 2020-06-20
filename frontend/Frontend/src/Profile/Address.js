/* eslint-disable */
import React,{Component} from "react";
import { View, Text, ScrollView, Button, StyleSheet, Modal, Picker } from 'react-native';
import { Card, Icon, Input } from 'react-native-elements';
import { TouchableOpacity, FlatList } from "react-native-gesture-handler";

const addressList = [
    {
        address : "Flat no 10 ABC society Dhule",
        type: "Home",
        id:"1"
    },
    {
        address : "Floor no 3 LMN bldg Pune",
        type: "Office",
        id:"2"
    },
    {
        address : "Flat no 11 XYZ colony Mumbai",
        type: "School",
        id:"3"
    }
];

class Address extends Component{

    constructor(props){
        super(props);
        this.state = {
            address: '',
            type: 'Home',
            showModal: false
        }
    }

    toggleModal() {
        this.setState({ showModal: !this.state.showModal });
    }

    handleSubmit() {
        //this.props.postAddress(this.state.address,this.state.type);
        this.toggleModal();
    };

    resetForm() {
        this.setState({
            address: '',
            type: 'Home'
        });
    };

    render(){
        return (
            <ScrollView style={styles.container}>
                <FlatList
                    data={addressList}
                    showsVerticalScrollIndicator={false}
                    key={addressList.id}
                    renderItem={({ item }) => (
                    <TouchableOpacity style={styles.component}>
                        <Text style={styles.textStyle,styles.formRow}>{item.address}</Text>
                        <Text style={styles.textStyle,styles.formRow}>{"\n"}Type : {item.type}</Text>
                    </TouchableOpacity>
                    )}
                />
                <View style={styles.formRow}>
                    <Icon raised reverse
                        name={'plus'} 
                        type='font-awesome' 
                        color="#512DA8"
                        onPress={() => this.toggleModal()} />
                    <Text style={{}}>Add address</Text> 
                </View>
                <Modal animationType={'slide'}
                        transparent={false}
                        visible={this.state.showModal}
                        onDismiss={() => {this.toggleModal(); this.resetForm()}}
                        onRequestClose={() => {this.toggleModal(); this.resetForm()}} 
                >
                        <View style={styles.modal} >
                            <Input 
                                placeholder=" Add your new address here"
                                leftIcon={
                                    <Icon 
                                        name='address-card'
                                        type='font-awesome'
                                    />
                                }
                                onChangeText={(address) => this.setState({ address: address})}
                            />
                            <View>
                                <Icon 
                                        name='list'
                                        type='font-awesome'
                                    />
                                <Picker
                                    //style={styles.formItem}
                                    selectedValue={this.state.type}
                                    onValueChange={(itemValue, itemIndex) => this.setState({type: itemValue})}>
                                    <Picker.Item label="Home" value="Home" />
                                    <Picker.Item label="Office" value="Office" />
                                    <Picker.Item label="School" value="School" />
                                    <Picker.Item label="Other" value="Other" />
                                </Picker>
                            </View>
                            <View style={styles.modalText}>                        
                                <Button style={styles.button}
                                    onPress={() => {this.handleSubmit()}}
                                    color='#512DA8'
                                    title='ADD'
                                />
                            </View>
                            <View style={styles.modalText}>
                                <Button style={styles.button}
                                    onPress={() => {this.resetForm(); this.toggleModal()}}
                                    color='#6c757d'
                                    title='CANCEL'
                                />
                            </View>
                        </View>
                    </Modal>
                </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        marginTop: 20,
        height: "62%",
        paddingVertical: 15
    },
    component: {
        height: 80,
        borderWidth: 1.5,
        borderColor: "#DDA0DD",
        justifyContent: "space-between",
        paddingHorizontal: 15,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 5,
        borderStyle: "dotted",
        backgroundColor: "rgba(52, 52, 52, 0.7)",
    },
    textStyle: {
        fontWeight: "600",
        fontSize: 17,
        letterSpacing: 0.3,
        color: "#fff",
    },
    formRow: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 20
    },
    formLabel: {
        fontSize: 18,
        flex: 2
    },
    formItem: {
        flex:1
    },
    modal: {
        justifyContent: 'center',
        margin: 20
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        backgroundColor: "#512DA8",
        textAlign: 'center',
        color: 'white',
        marginBottom: 20
    },
    modalText: {
        padding: 10
    },
    button:{
        alignItems: "center",
        justifyContent:"center",
        width:"25%"
    }
});

export default Address;
