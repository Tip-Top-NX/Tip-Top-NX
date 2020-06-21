import React from "react";
import { useSelector } from "react-redux";
import NotLoggedIn from "./NotLoggedIn";
import IfLoggedIn from "./IfLoggedIn";

const SignOut = () => {
  const user = useSelector((state) => state.user);
  return user.isValid ? <IfLoggedIn /> : <NotLoggedIn />;
};

export default SignOut;
