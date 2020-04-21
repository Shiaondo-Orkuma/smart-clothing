import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

//Components
import HomePage from "./Pages/HomePage/HomePage";
import Shop from "./Pages/Shop/Shop";
import Header from "./Componets/Header/Header";
import SignInAndSignUpPage from "./Pages/SignIn-SignUp-Page/SignInAndSignUpPage";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={Shop} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
