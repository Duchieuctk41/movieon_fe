import React from "react";
import "App.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "components/Home/Home";
import Header from "components/Header/Header";
import ModalLogin from "components/Login/Login";
import User from "components/User/User";
// import Footer from "components/Footer/Footer";
// import Header from "components/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            exact
            element={<Navigate to="/home" replace={true} />}
          />
          <Route path="/home" exact element={<Home />} />
          <Route path="/login" exact element={<ModalLogin />} />
          <Route path="/user" exact element={<User />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
