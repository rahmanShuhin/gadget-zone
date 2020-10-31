import React from "react";
import "./SideBar.css";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
const SideBar = () => {
  let history = useHistory();
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        history.push("/");
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  return (
    <div className="sideBar">
      <h2>My Account</h2>
      <ul>
        <li>
          <DashboardIcon></DashboardIcon>
          <Button onClick={() => history.push("/dashboard")}>Dashboard</Button>
        </li>
        <li>
          <ShoppingBasketIcon></ShoppingBasketIcon>
          <Button onClick={() => history.push("/order")}>My Orders</Button>
        </li>
        <li>
          <ExitToAppIcon></ExitToAppIcon>
          <Button onClick={handleSignOut}>Log Out</Button>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
