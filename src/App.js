import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Error404 from "./components/ErrorPage/Error404";
import Contacto from "./components/principal/Contacto";
import Galeria from "./components/principal/Galeria";
import Inicio from "./components/principal/Inicio";
import Peinados from "./components/principal/Peinados";
import QuienesSomos from "./components/principal/QuienesSomos";
import Tips from "./components/principal/Tips";
import "aos/dist/aos.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div>
          <Switch>
            <Route exact path="/">
              <Inicio />
            </Route>
            <Route exact path="/principal/galeria">
              <Galeria />
            </Route>
            <Route exact path="/principal/quienesSomos">
              <QuienesSomos />
            </Route>
            <Route exact path="/principal/peinados">
              <Peinados />
            </Route>
            <Route exact path="/principal/tips">
              <Tips />
            </Route>
            <Route exact path="/principal/contacto">
              <Contacto />
            </Route>
            <Route exact path="*">
              <Error404 />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
