import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/Authentication/LoginPage";
import SignupPage from "./components/Authentication/SignupPage";
import Home from "./components/Homepage/Home";
import Main from "./components/Homepage/Main";
import P404 from "./components/P404";
import NavBar from "./components/shared/NavBar";

const NoMatchPage = () => {
  return <P404 />;
};

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path="/gita/:chapter/:shloka" component={Home} exact />
        <Route path="/gita/:chapter" component={Home} />
        <Route path="/signin" component={SignupPage} exact />
        <Route component={NoMatchPage} />
      </Switch>
    </>
  );
}

export default App;
