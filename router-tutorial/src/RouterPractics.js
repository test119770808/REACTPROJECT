import React from "react";
import Header from "./practicscomponent/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./practicscomponent/Home";

function RouterPractics() {

  return (
    <Routes>
      <Route path="/*" element={<Home />} />
    </Routes>
  );

}

export default RouterPractics;  
