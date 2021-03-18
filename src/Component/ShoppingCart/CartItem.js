import React, { useContext, useEffect, useState } from "react";
import "./ShoppingCart.css";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import RemoveCircleRoundedIcon from "@material-ui/icons/RemoveCircleRounded";
import { CartContext } from "../Data_Context";
import { Button } from "@material-ui/core";
const CartItem = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const { id, products, quantity, price, discount, stock } = props;
  const arr = products?.find((x) => x._id === id);
  const [qt, setQt] = useState(quantity);
  console.log(arr);
  const removeQuantity = () => {
    const newCart = [...cart];
    const tem = newCart.map((x) => {
      if (x.id === id) {
        if (x.quantity !== 0) {
          setQt(quantity - 1);
          x.quantity = quantity - 1;
        }
        return x;
      } else {
        return x;
      }
    });
    setCart(tem);
  };

  const plusQuantity = (qt) => {
    const newCart = [...cart];
    const tem = newCart.map((x) => {
      if (x.id === id) {
        if (stock < quantity + 1) {
          alert(`Product is not in stock of ${quantity + 1} quantity`);
          return x;
        } else {
          setQt(quantity + 1);
          x.quantity = quantity + 1;
          return x;
        }
      } else {
        return x;
      }
    });
    setCart(tem);
  };

  const doubleQuantity = (e) => {
    if (e.target.value === "") {
      setQt("");
      const newCart = [...cart];
      const tem = newCart.map((x) => {
        if (x.id === id) {
          x.quantity = 0;
          return x;
        } else {
          return x;
        }
      });
      setCart(tem);
    } else {
      const newCart = [...cart];
      const tem = newCart.map((x) => {
        if (x.id === id) {
          if (stock < parseInt(e.target.value)) {
            alert(`Product is not in stock of ${e.target.value} quantity`);
            return x;
          } else {
            setQt(parseInt(e.target.value));
            x.quantity = parseInt(e.target.value);
            return x;
          }
        } else {
          return x;
        }
      });
      setCart(tem);
    }
  };
  const handleRemove = () => {
    const newArr = cart.filter((x) => x.id !== id);
    setCart(newArr);
  };
  return (
    <div className="cart__grid__container">
      <div>
        <img src={arr?.img} alt="" />
        <small>{arr?.name}</small>
      </div>
      <div>
        <div className="cart_plus_minus">
          <RemoveCircleRoundedIcon
            onClick={removeQuantity}
          ></RemoveCircleRoundedIcon>
          {/* <span>{quantity}</span> */}
          <span>
            <input
              type="number"
              value={qt}
              onChange={(e) => doubleQuantity(e)}
            />
          </span>
          <AddCircleIcon onClick={() => plusQuantity(1)}></AddCircleIcon>
        </div>
        {/* <div className="btn_double">
          <button onClick={() => doubleQuantity(5)}>+5</button>
          <button onClick={() => doubleQuantity(10)}>+10</button>
        </div> */}
      </div>

      <div>
        Tk. {Math.round(price * 85 - price * 85 * (arr?.discount / 100))}
      </div>
      <div>
        Tk.{" "}
        {Math.round(price * 85 - price * 85 * (arr?.discount / 100)) * quantity}
      </div>
      <div>
        <Button color="secondary" variant="outlined" onClick={handleRemove}>
          Remove Item
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
