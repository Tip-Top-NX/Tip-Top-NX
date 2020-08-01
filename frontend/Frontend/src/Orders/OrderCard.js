import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Alert,
  Platform,
  ActivityIndicator,
} from "react-native";
import { myAxios, getConfig } from "../../../axios";
import OrderProductCard from "./OrderProductCard";
import { useDispatch } from "react-redux";
import { cancelOrder2 } from "../../../redux/ActionCreators";

const width = Dimensions.get("window").width;

const OrderCard = (props) => {
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const cancelOrder = () => {
    const bodyPart = {
      status: "Cancelled",
    };
    Alert.alert(
      "Cancel order",
      "Are you sure you want to cancel this order?",
      [
        {
          text: "No",
          style: "cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            setShow(true);
            getConfig().then((config) => {
              myAxios
                .put("/profile/order/" + props._id, bodyPart, config)
                .then((res) => {
                  setShow(false);
                  if (res.data._id == props._id) {
                    dispatch(cancelOrder2(props._id));
                  } else {
                    Alert.alert("Alert", "Order cannot be cancelled!", [
                      { text: "Ok" },
                    ]);
                  }
                });
              // .catch((err) => console.log(err));
            });
          },
        },
      ],
      { cancelable: false }
    );
  };
  const displayCancelOrder = () => {
    return (
      <View>
        <TouchableOpacity onPress={() => cancelOrder()}>
          <Text style={styles.cancelOrder}>Cancel Order</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      {show ? (
        <ActivityIndicator size="large" />
      ) : (
        <View
          style={[
            styles.orderBox,
            props.status == "Cancelled"
              ? { borderColor: "#e27070" }
              : { borderColor: "#4fc2a6" },
          ]}
        >
          <View style={styles.orderRow}>
            <Text style={[styles.orderNumber, { paddingRight: 50 }]}>
              ORDER NUMBER :
              <Text style={styles.orderNumberText}> {props._id}</Text>
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
            keyExtractor={(item, index) => index.toString()}
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
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 1,
              justifyContent: "space-between",
              height: 25,
              paddingHorizontal: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 15, color: "#7b7b7b" }}>
              Status :{" "}
              <Text
                style={props.status === "Cancelled" ? styles.red : styles.green}
              >
                {props.status === "Pending" ? "Confirming" : props.status}
              </Text>
            </Text>

            {props.status == "Pending" ? displayCancelOrder() : null}
          </View>
        </View>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  orderBox: {
    justifyContent: "center",
    borderWidth: 1,
    width: width,
    marginTop: 10,
    marginBottom: 5,
    backgroundColor: "#f5f5f5",
  },
  orderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 25,
    paddingHorizontal: 10,
  },
  orderNumber: {
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
    fontWeight: "bold",
  },
  green: {
    fontWeight: "bold",
    color: "#4fc2a6",
    fontSize: 16,
    paddingBottom: 3,
    letterSpacing: 0.7,
    marginBottom: 2,
  },
  red: {
    fontWeight: "bold",
    color: "#e27070",
    fontSize: 16,
    paddingBottom: 3,
    letterSpacing: 0.7,
    marginBottom: 2,
  },
  blue: {
    fontWeight: "bold",
    color: "#627dcb",
    fontSize: 16,
    paddingBottom: 3,
    letterSpacing: 0.7,
    marginBottom: 2,
  },
  cancelOrder: {
    color: "#e27070",
    fontSize: 15.5,
    // marginTop: -1,
    // marginLeft: 105,
    fontWeight: "bold",
    //paddingRight: 8,
    //textAlign: "right"
  },
});
export default OrderCard;
