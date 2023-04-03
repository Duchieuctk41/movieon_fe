import React from "react";

const Login = () => {
  return (
    <div className="login__container">
      <h2>Đăng nhập</h2>
      <input placeholder="Email" />
      <input placeholder="Mật khẩu" />
      <button>Đăng nhập</button>
      <div>
        <span>Lưu mật khẩu</span>
        <span>Đăng ký</span>
      </div>
      <span>Tài khoản mới? Đăng ký ngay</span>
    </div>
  );
};

export default Login;
