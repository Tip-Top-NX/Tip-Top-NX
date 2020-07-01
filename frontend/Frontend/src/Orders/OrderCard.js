import React from "react";
import { View, StyleSheet, Text, Dimensions, FlatList, TouchableOpacity } from "react-native";
import OrderProductCard from "./OrderProductCard";

const width = Dimensions.get("window").width;

const OrderCard = (props) => {
  
  let padding=132-props._id.toString().length*9;

  return (
    
    <View style={[styles.orderBox,(props.status == "Cancelled") ? {borderColor:"#e27070"} : (props.status == "Completed") ? {borderColor:"#627dcb"} : {borderColor:"#4fc2a6"}]}>
      <View style={styles.orderRow}>
        <Text style={[styles.orderNumber,{paddingRight:padding}]}>
        ORDER NUMBER :<Text style={styles.orderNumberText}> {props._id}</Text>
        </Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate("Order Details",{
            _id:props._id,
            amount:props.amount,
            deliveryCharge:props.deliveryCharge,
            status:props.status,
            method:props.method,
            orderDate:props.orderDate,
            name:props.name,
            address:props.address
        })}>
          <Text style={styles.orderDetails}>Order Details</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={props.contents}
        vertical={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.product._id.toString()}
        renderItem={({ item }) => (
          <OrderProductCard
            brand={item.product.brand}
            name={item.product.name}
            desc={item.product.description}
            discountPercentage={item.product.discountPercentage}
            image={item.product.images[0]}
            size={item.size}
            price={item.price}
            quantity={item.quantity}
            color={item.color}
            navigation={props.navigation}
          />
        )}
      />
      <View style={{ flexDirection:"row",paddingVertical:1 }}>
        <Text style={{paddingLeft: 10,fontSize:15,color:"#7b7b7b"}}>Status : </Text>
        <Text style={(props.status == "Cancelled") ? styles.red : (props.status == "Completed") ? styles.blue : styles.green}>{props.status}</Text>
      </View>
    </View>
  
  );
};

const styles = StyleSheet.create({
  orderBox: {
    justifyContent: "center",
    borderWidth: 1,
    width: width,
    paddingTop:15,
    marginTop:10,
    marginBottom:5,
    backgroundColor:"#f5f5f5"
  },
  orderRow:{
    flexDirection:"row",
    justifyContent:"flex-end",
    marginTop:-6
  },
  orderNumber:{  
    paddingBottom: 2,
    fontSize:14,
    color:"#7b7b7b",
    
  },
  orderNumberText: {
    ...Platform.select({
      ios: {
          fontWeight: '600',
      },
      android: {
        fontWeight:"bold"
      }
    }),
    fontSize: 16,
    color:"#4f515e",
  },
  orderDetails:{
    color:"#627dcb",
    fontSize:15.5,
    marginTop:-1,
    marginRight:3,
    fontWeight: "bold",
    paddingRight:8
  },
  green:{
    fontWeight:"bold",
    color:"#4fc2a6",
    fontSize:16,
    paddingBottom: 5,
    letterSpacing:0.7
  },
  red:{
    fontWeight:"bold",
    color:"#e27070",
    fontSize:16,
    paddingBottom: 5,
    letterSpacing:0.7
  },
  blue:{
    fontWeight:"bold",
    color:"#627dcb",
    fontSize:16,
    paddingBottom: 5,
    letterSpacing:0.7
  }
});

export default OrderCard;
