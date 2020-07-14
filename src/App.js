import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Topnavbar from "./components/Topnavbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import About from "./components/About";
import Faq from "./components/Faq";



class App extends Component {
  render(){
    return (
      <React.Fragment>
        <Topnavbar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={Cart} />
          <Route path="/details" component={Details} />
          <Route path="/about" component={About} />
          <Route path="/faq" component={Faq} />
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
