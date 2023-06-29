import React, { FunctionComponent } from "react"
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


const App: FunctionComponent = () => {
  return (
    <Router >
      <Layout/>
      <Routes>
        <Route  path="/" Component={Home }/>
        <Route path="/about" Component={About} />
      </Routes>
    </Router>
  );
}

export default App;
