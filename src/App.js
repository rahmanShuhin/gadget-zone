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
import { Data_Context } from "./Component/Data_Context";
import Login from "./Component/Login/Login";
import { Sign_In_Context } from "./Component/Sign_In_Context";
import ShoppingCart from "./Component/ShoppingCart/ShoppingCart";
import Dashboard from "./Component/Dashboard/Dashboard";
import Order from "./Component/Order/Order";
import { PrivateRoute } from "./UseAuth";
import Checkout from "./Component/Checkout/Checkout";
function App() {
  return (
    <HomeWrapper>
      <Sign_In_Context>
        <Data_Context>
          <Router>
            <Switch>
              <Route exact path="/">
                <Navigation></Navigation>
                <Slider></Slider>
                <TopSelling></TopSelling>
                <Advertise__1></Advertise__1>
                <TopDells></TopDells>
                <NewArrival></NewArrival>
                <Footer></Footer>
              </Route>
              <Route exact path="/product/:id">
                <Navigation></Navigation>
                <ShowProduct></ShowProduct>
                <Footer></Footer>
              </Route>
              <Route exact path="/login">
                <Navigation></Navigation>
                <Login></Login>
              </Route>
              <Route exact path="/order">
                <Navigation></Navigation>
                <Order></Order>
              </Route>
              <Route exact path="/dashboard">
                <Navigation></Navigation>
                <Dashboard></Dashboard>
              </Route>
              <Route exact path="/cart">
                <Navigation></Navigation>
                <ShoppingCart></ShoppingCart>
              </Route>
              <PrivateRoute exact path="/checkout">
                <Checkout></Checkout>
              </PrivateRoute>
            </Switch>
          </Router>
        </Data_Context>
      </Sign_In_Context>
    </HomeWrapper>
  );
}

export default App;
