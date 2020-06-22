/* eslint-disable */
import React from "react";
import Empty from "./Empty";
import { useSelector } from "react-redux";
import DisplayWishlist from "./DisplayWishlist";

const Wishlist = ({ navigation }) => {
  const user = useSelector((state) => state.user);

  return user.wishlist.length === 0 ? (
    <Empty navigation={navigation} />
  ) : (
    <DisplayWishlist wishlist={user.wishlist} />
  );
};

export default Wishlist;
