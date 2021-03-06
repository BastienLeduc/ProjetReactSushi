import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { Signup } from "./components/Signup/Signup.js";
import { PrivateRoute } from "./components/PrivateRoute.js";
import "./css/App.css";
import "./css/main.css";
import Board from "./components/Board/Board.js";
import Connexion from "./components/Login/Connexion.js";
import Shop from "./components/Shop";
import Profil from "./components/Profil";
import HistoriqueCommandes from "./components/HistoriqueCommandes";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div id="wrapper">
            <header id="header">
              <div className="content">
                <h1>Sushi team</h1>
                <Switch>
                  <Route exact path="/login" component={Connexion} />
                  <Route exact path="/signup" component={Signup} />
                  <PrivateRoute path="/" component={Board} />
                </Switch>
                <PrivateRoute path="/profil" component={Profil} />
                <PrivateRoute path="/panier" component={Cart} />
                <PrivateRoute path="/shop" component={Shop} />
                <PrivateRoute path="/historiqueCommandes" component={HistoriqueCommandes} />
                <PrivateRoute path="/contact" component={Contact} />
              </div>
            </header>
            <footer id="footer">
              <p className="copyright">© Alexandra Dion / Bastien Leduc / Malo Gicquel - Ei5 SAGI Polytech Angers</p>
            </footer>
          </div>
          <div id="bg" />
        </div >
      </BrowserRouter>
    );
  }
}
export default App;