import React from "react";
import { useSelector } from "react-redux";
const Profile = () => {
  const { name, age, email } = useSelector((state) => state.user.value);
  console.log(name, age, email);
  return (
    <>
      <div>Profile</div>
      <p> Name:{name}</p>
      <p> Age:{age}</p>
      <p> Email:{email}</p>
    </>
  );
};
export default Profile;
