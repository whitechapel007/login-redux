import React from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user/userSlice";
function Login() {
  const disatch = useDispatch();

  const payload = {
    name: "ebuka",
    age: 20,
    email: "overcomer",
  };
  return (
    <>
      <button onClick={() => disatch(login(payload))}>login</button>
      <button onClick={() => disatch(logout())}>logout</button>
    </>
  );
}

export default Login;
