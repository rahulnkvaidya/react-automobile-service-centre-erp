import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./screens/home";
import searchList from "./screens/searchList";
import Header from "./components/header";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/search" component={searchList} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
