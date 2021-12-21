import React from "react";
//Components and Pages
import Home from "./pages/Home";
import Nav from "./components/Nav";
//Global Styles
import GlobalStyles from "./components/GlobalStyles";
//ROUTER
import { Route } from "react-router";


function App() {

  return (
    <div className="App">
        <GlobalStyles />
        <Nav />
        <Route path={["/games/:id", "/"]}>
          <Home />
        </Route>
    </div>
  );
}

export default App;
