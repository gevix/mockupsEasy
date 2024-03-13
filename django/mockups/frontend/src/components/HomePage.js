import React, { Component } from "react";
import MockupConstructor from "./MockupConstructor";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import Layout from "./Layout";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

export default function HomePage() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
        <div className="max-w-[1260px] mx-auto">
            <Header />
            <Banner />
            <Layout />
            <Footer />
          </div>
        </Route>
        <Route path="/:slug" component={MockupConstructor} />
      </Switch>
    </Router>
  );
}
