import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import Layout from "./Layout";
import MockupConstructorPage from "./MockupConstructorPage";
import AboutPage from "./AboutPage";
import HowToPage from "./HowToPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function HomePage() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="">
            <Header />
            <Banner />
            <Layout />
            <Footer />
          </div>
        </Route>
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/how-to-use-it" component={HowToPage} />
        <Route path="/:slug" component={MockupConstructorPage} />
      </Switch>
    </Router>
  );
}
