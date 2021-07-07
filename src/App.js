import "./App.module.scss";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Products from "./containers/Products";
import Product from "./containers/Product";
import Footer from "./containers/Footer";
import Navbar from "./components/Navbar";
import BrandBanner from "./components/BrandBanner";
import Cart from "./containers/Cart";

const App = () => {
    return (
        <Router>
            <header>
                <BrandBanner />
                <Navbar />
            </header>
            <Switch>
                <Route exact path="/">
                    <Products />
                </Route>
                <Route exact path="/products">
                    <Products />
                </Route>
                <Route path="/cart" component={Cart} />
                <Route path="/products/:id">
                    <Product />
                </Route>
            </Switch>
            <footer>
                <Footer />
            </footer>
        </Router>
    );
};

export default App;
