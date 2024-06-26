import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Banner";
import Layout from "./Layout";
import MockupConstructorPage from "./MockupConstructorPage";
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
          <div className="">
            <Header />
            <Banner />
            <Layout />
            <Footer />
          </div>
        </Route>
        <Route path="/:slug" component={MockupConstructorPage} />
      </Switch>
    </Router>
  );
}
