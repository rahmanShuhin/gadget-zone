import React from "react";
import "./App.css";
import Navigation from "./Component/Navigation/Navigation";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Slider from "./Component/Slider/Slider";
import TopSelling from "./Component/TopSelling/TopSelling";
import NewArrival from "./Component/NewArrival/NewArrival";
import TopDells from "./Component/TopDells/TopDells";
import Advertise__1 from "./Component/Advertise__1/Advertise__1";
import ShowProduct from "./Component/ShowProduct/ShowProduct";
import Footer from "./Component/Footer/Footer";
import HomeWrapper from "./Component/Slick_style";
function App() {
  return (
    <HomeWrapper>
      <Router>
        <Switch>
          <Route exact path="/product/:id">
            <Navigation></Navigation>
            <ShowProduct></ShowProduct>
            <Footer></Footer>
          </Route>
          <Route exact path="/">
            <Navigation></Navigation>
            <Slider></Slider>
            <TopSelling></TopSelling>
            <Advertise__1></Advertise__1>
            <TopDells></TopDells>
            <NewArrival></NewArrival>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </HomeWrapper>
  );
}

export default App;
