import { BookTwoTone } from "@material-ui/icons";
import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/Authentication/LoginPage";
import SignupPage from "./components/Authentication/SignupPage";
import About from "./components/Homepage/About";
import DataFetch from "./components/Homepage/DataFetch";
import Home from "./components/Homepage/Home";
import Main from "./components/Homepage/Main";
import TeamPage from "./components/Homepage/TeamPage";
import P404 from "./components/P404";
import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar";
import AddToFirestore from "./Firebase/AddToFirestore";

const NoMatchPage = () => {
  return <P404 />;
};

function App() {
  const book = "srimadhwavijaya";
  return (
    <div className="mainbody">
      <NavBar />
      <Switch>
        <Route path="/" component={Main} exact />
        <Route path="/about" component={About} exact />
        <Route path="/our-team" component={TeamPage} exact />
        <Route path="/add" component={AddToFirestore} exact />
        <Route path="/login" component={LoginPage} exact />
        <Route path={`/:book/:chapters/:shloka`} component={Home} exact />
        <Route path={`/:book/:chapters`} component={Home} exact />
        <Route path="/signin" component={SignupPage} exact />
        <Route component={NoMatchPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
