import "./App.module.scss";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import CardGrid from "./containers/CardGrid";
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
                <Hero />
                <CardGrid />
                <Carousel />
            </body>
            <footer>
                <Footer />
            </footer>
        </Router>
    );
};

export default App;
