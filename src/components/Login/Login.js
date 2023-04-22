import React, { useState } from "react";
import "./Login.scss";
import { useDispatch } from "react-redux";
import { loginAPI } from "redux/user/userSlice";
import SLIDE_DEFAULT from "assets/img/hero.jpg";
import Input from "components/input/input";


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
    <div className=" relative login_container w-full bg-[url('/src/assets/img/hero.jpg')] bg-no-repeat bg-fixed bg-cover " >
      <div className="w-full h-full bg-black bg-opacity-50">
        <div className="flex justify-center">
          <div className=" bg-opacity-70 bg-black  self-center px-16 py-16 mt-16 max-w-md rounded-md w-full">
            <h2 className=" text-white text-4xl mb-8 font-semibold">
              Sign in
            </h2>
            <div className="flex flex-col gap-4">
              <Input name="email"/>
              <Input name="password"/>
            </div>
            <button className=" bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition"> Login</button>
            <p className=" text-neutral-500 mt-12">
              Fist time using Netflix?
              <span className=" text-white ml-1 hover:underline cursor-pointer">
                Create and account
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalLogin;
