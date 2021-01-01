import React, { useEffect } from "react";
// Components and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import GameDetails from "./pages/GameDetails";
import { Link, Switch, Route, useLocation } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1></h1>
      <GlobalStyles />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/:id">
          <GameDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
