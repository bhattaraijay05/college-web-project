import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/Authentication/LoginPage";
import SignupPage from "./components/Authentication/SignupPage";
import DataFetch from "./components/Homepage/DataFetch";
import Home from "./components/Homepage/Home";
import Main from "./components/Homepage/Main";
import P404 from "./components/P404";
import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar";
import AddToFirestore from "./Firebase/AddToFirestore";

const NoMatchPage = () => {
  return <P404 />;
};

function App() {
  return (
    <div className="mainbody">
      <NavBar />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/add" component={AddToFirestore} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/gita/:chapters/:shloka" component={Home} exact />
        <Route path="/gita/:chapters" component={Home} exact />
        <Route path="/signin" component={SignupPage} exact />
        <Route component={NoMatchPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
