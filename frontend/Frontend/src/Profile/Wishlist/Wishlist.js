/* eslint-disable */
import React from "react";
import Empty from "./Empty";
import { useSelector } from "react-redux";
import DisplayWishlist from "./DisplayWishlist";

const Wishlist = ({ navigation }) => {
  const user = useSelector((state) => state.user);
  const wishlist = [...user.wishlist];

  return wishlist.length === 0 ? (
    <Empty navigation={navigation} />
  ) : (
    <DisplayWishlist wishlist={wishlist} />
  );
};

export default Wishlist;
