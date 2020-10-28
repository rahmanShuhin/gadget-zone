import React from "react";
import { Link } from "react-router-dom";
import { Button, Badge } from "@material-ui/core";
import "./Navigation.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
const Navigation = () => {
  
  window.onscroll = function () {
    myFunction();
  };

  function myFunction() {
    var navbar = document.getElementById("navbar");
    if (window.pageYOffset >= 1) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }
  return (
    <div className="navigation">
      <div className="navigation__top">
        <div>
          <Link className="link">Camera</Link>
          <Link className="link">Phone</Link>
          <Link className="link">Android</Link>
          <Link className="link">Laptop</Link>
        </div>
      </div>
      <div className="navigation__menu" id="navbar">
        <div className="navigation__logo">
          <Link to="/" className="link">
            Gadget
          </Link>
        </div>
        
        <div className="navigation__cart">
          <p>
            Cart &nbsp;
            <Badge badgeContent={0} color="secondary">
              <ShoppingCartIcon></ShoppingCartIcon>
            </Badge>
          </p>
          <p>
            My Account &nbsp;
            <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
