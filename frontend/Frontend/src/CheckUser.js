import React from "react";
import { useSelector } from "react-redux";
import ValidDrawer from "../Routes/ValidDrawer";
import InvalidDrawer from "../Routes/InvalidDrawer";

const CheckUser = () => {
  const user = useSelector((state) => state.user);
  return user.isValid ? <ValidDrawer /> : <InvalidDrawer />;
};

export default CheckUser;
