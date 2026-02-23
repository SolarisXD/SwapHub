import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Buy from "./pages/Buy";
import Sell from "./pages/Sell";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Donate from "./pages/Donate";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/rent" element={<Buy mode="rent" />} />
          <Route path="/donate" element={<Donate />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
