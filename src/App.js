import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Authentication/Login";
import Signup from "./components/Authentication/Signup";
import About from "./components/Homepage/About";
import Home from "./components/Homepage/Home";
import Main from "./components/Homepage/Main";
import TeamPage from "./components/Homepage/TeamPage";
import P404 from "./components/P404";
import Footer from "./components/shared/Footer";
import NavBar from "./components/shared/NavBar";
import AddToFirestore from "./Firebase/AddToFirestore";
import EditData from "./Firebase/EditData";
import { auth } from "./Firebase/Firebase";

const NoMatchPage = () => {
  return <P404 />;
};

function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [user]);
  return (
    <div className="mainbody">
      <NavBar />
      <Switch>
        <Route path="/" component={Main} exact />

        <Route
          path="/add"
          component={!user ? NoMatchPage : AddToFirestore}
          exact
        />
        <Route
          path="/edit/:book/:id"
          component={!user ? NoMatchPage : EditData}
          exact
        />
        <Route path="/about" component={About} exact />
        <Route path="/our-team" component={TeamPage} exact />
        <Route path={`/:book/:chapters/:shloka`} component={Home} exact />
        <Route path={`/:book/:chapters`} component={Home} exact />
        <Route path="/login" component={!user ? Login : Main} exact />
        <Route path="/signup" component={!user ? Signup : Main} exact />

        <Route component={NoMatchPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
