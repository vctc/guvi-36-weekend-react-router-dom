import "./styles.css";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Random from "./pages/Random";
import { Posts } from "./pages/Posts";
import { BrowserRouter as Router } from "react-router-dom";

export default function App() {
  //useState, useEffect

  // //component did mount -> initial rendering phase
  // React.useEffect(() => {
  //   console.log("component starts here");
  // }, []);

  // React.useEffect(() => {}, []);

  // //component did update -> tracking state(counter)
  // React.useEffect(() => {
  //   console.log("useefect couter ", counter);
  // }, [counter]);

  //component unmount -> destroy
  React.useEffect(() => {
    return () => {
      console.log("component destroy");
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
          <Route path="/random" element={<Random />}></Route>
          <Route path="/posts" element={<Posts />}></Route>
        </Routes>
      </div>
    </Router>
  );
}
