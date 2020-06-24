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
    if(user.isValid){
      if(user.wishlist.filter((item) => item._id==props._id).length==0){
        setItemStatus(false);
      }
      else{
        setItemStatus(true);
      }
    }
  }, [])

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
        style={{ position: "absolute", top: 220, right: 15 }}
        name="bookmark"
        size={24}
        color="black"
        onPress={() => handleWishlist()}
      />
    ) : (
      <FontAwesome
        style={{ position: "absolute", top: 220, right: 15 }}
        name="bookmark-o"
        color="black"
        size={24}
        onPress={() => handleWishlist()}
      />
    );
  };

  return (
    <View>
      <View style={props.cardStyle}>
        <Image
          source={{ uri: getURL(props.images[0]) }}
          style={props.imageView}
        ></Image>
        {user.isValid ? <Icon /> : null}
        <TouchableOpacity onPress={() => props.navigation.navigate("Product")}>
          <View style={props.details}>
            <Text style={props.textStyle}>Name : {props.name}</Text>
            <Text style={props.textStyle}>Price : {props.price}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
