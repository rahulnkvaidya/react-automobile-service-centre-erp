import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./screens/searchList";
import searchList from "./screens/home";
import newjob from './screens/newjobs';
import Header from "./components/header";
import Footer from "./components/footer";
import JobList from './screens/joblist';
import EditJob from './screens/editjob';

function App() {
  return (
    <BrowserRouter>
      <div className="container bg-light">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/joblist" component={JobList} />
        <Route path="/search" component={searchList} />
        <Route path="/newjob" component={newjob} />
        <Route path="/editjob/:jobid" component={EditJob} />
        
      
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
