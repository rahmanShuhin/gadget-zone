import React from "react";
import { Grid, Card, Button } from "@material-ui/core";
import "./Products.css";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
const Products = (props) => {
  const { name, img, price, category, discount } = props.x.data;
  return (
    <Link className="link">
      <Card className="products__card">
        {discount > 0 && (
          <div className="discount__box">
            <p>{discount}% off </p>
          </div>
        )}
        <div className="img__container">
          <img src={img} alt="" />
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
          <Button variant="contained" color="primary">
            <AddShoppingCartIcon></AddShoppingCartIcon>
            Add To Cart
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default Products;
