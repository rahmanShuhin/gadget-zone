import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Button, Badge } from "@material-ui/core";
import "./Navigation.css";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { CartContext } from "../Data_Context";
import { UserContext } from "../Sign_In_Context";
const Navigation = () => {
  const [cart, setCart] = useContext(CartContext);
  const [user, setUser] = useContext(UserContext);
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
          <Link className="link" to={`/product/camera`}>
            Camera
          </Link>
          <Link className="link" to={`/product/android`}>
            Phone
          </Link>
          <Link className="link" to={`/product/laptop`}>
            Laptop
          </Link>
        </div>
      </div>
      <div className="navigation__menu" id="navbar">
        <div className="navigation__logo">
          <Link to="/" className="link">
            Gadget
          </Link>
        </div>

        <div className="navigation__cart">
          <Link className="link" to="/cart">
            <p>
              Cart &nbsp;
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartIcon></ShoppingCartIcon>
              </Badge>
            </p>
          </Link>
          <Link className="link" to={user ? "/dashboard" : "/login"}>
            <p>
              {!user ? (
                <span>Sign In &nbsp;</span>
              ) : (
                <span>My Account &nbsp;</span>
              )}
              <AccountCircleOutlinedIcon></AccountCircleOutlinedIcon>
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
