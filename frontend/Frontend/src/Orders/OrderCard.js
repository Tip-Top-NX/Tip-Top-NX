import React from "react";
import { View, StyleSheet, Text, Dimensions, FlatList } from "react-native";
import OrderProductCard from "./OrderProductCard";

const width = Dimensions.get("window").width;

const OrderCard = (props) => {
  console.log("In ordercard.js");
  return (
    <View style={styles.orderBox}>
      <View style={{flexDirection:row}}>
        <Text style={{ paddingLeft: 10, paddingTop: 5 }}>
          ORDER NUMBER :<Text style={styles.orderNumberText}> {props._id}</Text>
        </Text>
        <
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
            image={item.product.images[0]}
            size={item.size}
            color={item.color}
            price={item.price}
            quantity={item.quantity}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  orderBox: {
    justifyContent: "center",
    borderWidth: 1,
    width: width,
    borderColor: "black",
  },
  orderNumberText: {
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default OrderCard;
