import "./App.module.scss";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Products from "./containers/Products";
import Carousel from "./containers/Carousel";
import Hero from "./containers/Hero";
import Footer from "./containers/Footer";
import Header from "./containers/Header";

const App = () => {
    return (
        <Router>
            <header>
                <Header />
            </header>
            <body>
                {/* <Switch> */}
                <Hero />
                {/* <Route path="/products"> */}
                <Products />
                {/* </Route> */}

                <Carousel />
                {/* </Switch> */}
            </body>
            <footer>
                <Footer />
            </footer>
        </Router>
    );
};

export default App;
