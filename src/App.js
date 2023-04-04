import React from "react";
import "App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "components/Home/Home";
import Header from "components/Header/Header";
import Info from "components/Info/Info";
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
          <Route path="/" exact element={<Home />} />
          <Route path="/info/:movieId" exact element={<Info />} />
          <Route path="/login" exact element={<ModalLogin />} />
          <Route path="/user" exact element={<User />} />
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
