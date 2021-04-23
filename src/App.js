import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import { Route, Switch } from "react-router-dom";

import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        {/* here exact is preventing home page to display in other pages as all pages match '/' & for other it's to prevent any future mistake (exact matches exact path mentioned */}
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        {/* here ':slug' is variable which can render different pages  */}
        <Route component={Error} />
      </Switch>
      {/* here switch is redirecting to error page if url does not matches any of the Route path */}
    </>
  );
}

export default App;
