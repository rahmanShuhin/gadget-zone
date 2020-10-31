import React, { useContext, useEffect, useState } from "react";
import { Grid, Card, Button } from "@material-ui/core";
import "./Products.css";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { CartContext } from "../Data_Context";
import { Howl, Howler } from "howler";
import button_Click from "../../audio/button_Click.mp3";
const Products = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const { name, img, price, category, discount } = props.x.data;
  const [added, setAdded] = useState(false);
  const { id } = props.x;
  const handleAdd = () => {
    const newCart = {
      id: id,
      quantity: 1,
      price: price,
      discount: discount,
    };
    setCart([...cart, newCart]);
    console.log(id);
  };
  const handleRemove = () => {
    const temp = cart.filter((x) => x.id !== id);
    setAdded(false);
    setCart(temp);
  };
  useEffect(() => {
    const isAdded = cart.find((x) => x.id === id);
    if (isAdded) {
      setAdded(true);
    }
  }, [cart]);
  return (
    <Link className="link">
      <Card className="products__card">
        {discount > 0 && (
          <div className="discount__box">
            <p>{discount}% off </p>
          </div>
        )}
        <div className="img__container">
          <img src={img} alt={img} />
        </div>
        <div className="products__card__bottom">
          <small>{category}</small>
          <p>{name}</p>
          {discount > 0 ? (
            <p>
              <small>
                <del style={{ color: "gray" }}>
                  Tk. {Math.round(price * 85)}
                </del>
              </small>
              &nbsp;Tk. {Math.round(price * 85 - price * 85 * (discount / 100))}
            </p>
          ) : (
            <p>Tk. {Math.round(price * 85)}</p>
          )}
        </div>
        <div className="add__cart__button">
          {!added ? (
            <Button variant="contained" color="primary" onClick={handleAdd}>
              <AddShoppingCartIcon></AddShoppingCartIcon>
              Add To Cart
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleRemove}>
              <CheckCircleIcon></CheckCircleIcon>
              Item Added
            </Button>
          )}
        </div>
      </Card>
    </Link>
  );
};

export default Products;
