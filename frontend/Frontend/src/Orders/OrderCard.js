import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import { myAxios, } from "../../../axios";
import OrderProductCard from "./OrderProductCard";

const width = Dimensions.get("window").width;

const OrderCard = (props) => {
  let padding = 132 - props._id.toString().length * 9;

  const cancelOrder = () => {
    const bodyPart={
      status:"Cancelled"
    };
    Alert.alert(
      "Cancel order",
      "Are you sure you want to cancel this order?",
      [
        {
          text: "Yes",
          onPress: () => {
            myAxios
              .put("/profile/order/props._id",bodyPart)
              .then((res) => {
                  if (res.data.order) {
                      console.log("This is pending");
                  }
                  else{
                      Alert.alert("Alert","Order cannot be cancelled!",[{text:"Ok"}]);
                  }
              })
              .catch((err) => console.log(err));
          },
        },
        {
          text: "Cancel",
          style: "cancel",
        },
      ],
      { cancelable: false }
    );
  };
  
  const displayCancelOrder = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => cancelOrder()}
        >
          <Text style={styles.cancelOrder}>Cancel Order</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.orderBox,
        props.status == "Cancelled"
          ? { borderColor: "#e27070" }
          : props.status == "Completed"
          ? { borderColor: "#627dcb" }
          : { borderColor: "#4fc2a6" },
      ]}
    >
      <View style={styles.orderRow}>
        <Text style={[styles.orderNumber, { paddingRight: padding }]}>
          ORDER NUMBER :<Text style={styles.orderNumberText}> {props._id}</Text>
        </Text>
        <TouchableOpacity
          onPress={() =>
            props.navigation.navigate("Order Details", {
              _id: props._id,
              amount: props.amount,
              deliveryCharge: props.deliveryCharge,
              status: props.status,
              method: props.method,
              orderDate: props.orderDate,
              name: props.name,
              address: props.address,
            })
          }
        >
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
      <View style={{ flexDirection: "row", paddingVertical: 1 }}>
        <Text style={{ paddingLeft: 10, fontSize: 15, color: "#7b7b7b" }}>
          Status :{" "}
        </Text>
        <Text
          style={
            props.status == "Cancelled"
              ? styles.red
              : props.status == "Completed"
              ? styles.blue
              : styles.green
          }
        >
          {props.status}
        </Text>
        {props.status == "Placed" ? displayCancelOrder() : null}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  orderBox: {
    justifyContent: "center",
    borderWidth: 1,
    width: width,
    paddingTop: 15,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: "#f5f5f5",
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: -6,
  },
  orderNumber: {
    paddingBottom: 2,
    fontSize: 14,
    color: "#7b7b7b",
  },
  orderNumberText: {
    ...Platform.select({
      ios: {
        fontWeight: "600",
      },
      android: {
        fontWeight: "bold",
      },
    }),
    fontSize: 16,
    color: "#4f515e",
  },
  orderDetails: {
    color: "#777777",
    fontSize: 15.5,
    marginTop: -1,
    marginRight: 3,
    fontWeight: "bold",
    paddingRight: 8,
  },
  green: {
    fontWeight: "bold",
    color: "#4fc2a6",
    fontSize: 16,
    paddingBottom: 3,
    letterSpacing: 0.7,
    marginBottom:2
  },
  red: {
    fontWeight: "bold",
    color: "#e27070",
    fontSize: 16,
    paddingBottom: 3,
    letterSpacing: 0.7,
    marginBottom:2
  },
  blue: {
    fontWeight: "bold",
    color: "#627dcb",
    fontSize: 16,
    paddingBottom: 3,
    letterSpacing: 0.7,
    marginBottom:2
  },
  cancelOrder: {
    color: "#e27070",
    fontSize: 15.5,
    marginTop: -1,
    marginLeft: 105,
    fontWeight: "bold",
    //paddingRight: 8,
    //textAlign: "right"
  },
});
export default OrderCard;
