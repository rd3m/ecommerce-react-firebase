import logo from "./logo.svg";
import "./App.module.scss";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Colleagues from "./containers/Colleagues";
import BrandBanner from "./components/BrandBanner";
import CardGrid from "./components/CardGrid";
import Carousel from "./components/Carousel";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Footer from "./containers/Footer";

const App = () => {
    return (
        <Router>
            <header>
                <BrandBanner />
                <nav>
                    <Navbar />
                </nav>
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
