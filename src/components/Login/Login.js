import React, { useState } from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { loginAPI } from "redux/user/userSlice";
import SLIDE_DEFAULT from "assets/img/hero.jpg";

const ModalLogin = ({ handleClickLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    handleClickLogin();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    let data = {
      email: email,
      password: password,
    };
    dispatch(loginAPI(data));
    handleCloseModal();
  };
  return (
    <div className="bg_login h-full" style={{ backgroundImage: `url(${SLIDE_DEFAULT})` }}>
      
    </div>
  );
};
export default ModalLogin;
