import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { myAxios, getConfig } from "../../../axios";
import OrderProductCard from "./OrderProductCard";
import { useSelector, useDispatch } from "react-redux";
import { cancelOrder2 } from "../../../redux/ActionCreators";
import Splash from "../Splash";

const width = Dimensions.get("window").width;

const OrderCard = (props) => {
  let padding = 92 - props._id.toString().length * 9;
  const [show, setShow] = useState(true);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 1200);
  });

  const cancelOrder = () => {
    const bodyPart = {
      status: "Cancelled",
    };
    Alert.alert(
      "Cancel order",
      "Are you sure you want to cancel this order?",
      [
        {
          text: "Yes",
          onPress: () => {
            setShow(true);
            getConfig().then((config) => {
              myAxios
                .put("/profile/order/" + props._id, bodyPart, config)
                .then((res) => {
                  if (res.data._id == props._id) {
                    dispatch(cancelOrder2(props._id));
                  } else {
                    Alert.alert("Alert", "Order cannot be cancelled!", [
                      { text: "Ok" },
                    ]);
                  }
                })
                .catch((err) => console.log(err));
            });
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
        <TouchableOpacity onPress={() => cancelOrder()}>
          <Text style={styles.cancelOrder}>Cancel Order</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      {show ? (
        <Splash />
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
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 1,
              justifyContent: "space-between",
              height: 25,
              paddingHorizontal: 10,
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
