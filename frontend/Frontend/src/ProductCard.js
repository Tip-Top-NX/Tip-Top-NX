/* eslint-disable */
import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { postWishlist, delWishlist } from "../../redux/ActionCreators";
import { getURL } from "../../axios";

const ProductCard = (props) => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [itemStatus, setItemStatus] = useState(false);

  useEffect(() => {
    if (user.isValid) {
      if (user.wishlist.filter((item) => item._id == props._id).length == 0) {
        setItemStatus(false);
      } else {
        setItemStatus(true);
      }
    }
  }, [user.wishlist]);

  const handleWishlist = () => {
    if (itemStatus) {
      dispatch(delWishlist(props._id));
    } else {
      dispatch(postWishlist(props._id));
    }
    setItemStatus(!itemStatus);
  };

  const Icon = () => {
    return itemStatus ? (
      <FontAwesome
        // style={{ position: "absolute", top: 20, right: 10 }}
        name="bookmark"
        size={24}
        color="black"
        onPress={() => handleWishlist()}
      />
    ) : (
      <FontAwesome
        // style={{ position: "absolute", top: 20, right: 10 }}
        name="bookmark-o"
        color="black"
        size={24}
        onPress={() => handleWishlist()}
      />
    );
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() =>
          props.navigation.navigate("Product", {
            brand: props.brand,
            category: props.category,
            description: props.description,
            colors: props.colors,
            images: props.images,
            size: props.size,
            style: props.style,
            discountPercentage: props.discountPercentage,
            name: props.name,
            price: props.price,
            _id: props._id,
          })
        }
      >
        <View style={props.cardStyle}>
          <View style={props.imageContainer}>
            <Image
              source={{ uri: getURL(props.images[0]) }}
              style={props.imageView}
            ></Image>
          </View>

          <View style={props.details}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "700" }}>{props.brand}</Text>
              {user.isValid ? <Icon /> : null}
            </View>

            <Text style={[props.textStyle, { color: "grey", fontSize: 11 }]}>
              {props.name}
            </Text>
            {props.price === 0 ? null : (
              <Text style={[props.textStyle, { fontWeight: "600" }]}>
                Price : ₹ {props.price}
              </Text>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
