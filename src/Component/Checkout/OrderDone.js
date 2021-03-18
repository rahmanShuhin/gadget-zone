import React, { useEffect } from "react";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import { Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
const OrderDone = ({ orderForm }) => {
  useEffect(() => {
    orderForm.items.map((x) => {
      fetch(`https://nameless-lake-62164.herokuapp.com/update/stock/${x.id}`, {
        method: "PATCH",
        body: JSON.stringify({
          stock: x.stock,
          quantity: x.quantity,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.text())
        .then((json) => console.log(json));
    });
  }, []);
  return (
    <div className="payment__method">
      <div>
        <div>
          <PaymentOutlinedIcon></PaymentOutlinedIcon>
        </div>
        <h2>Order Success</h2>
      </div>
      <div>
        <h2>Thanks For Your Purchase</h2>
        <Link>Keep Shopping With Us !</Link>
      </div>
      <div>
        <div className="order_voucher">
          <div>
            <div>Delivery Address : </div>
            <div> {orderForm?.address}</div>
          </div>
          <div>
            <div>Quantity</div>
            <div>Description</div>
            <div>Unit Price</div>
            <div>Discount</div>
            <div>Total</div>
          </div>
          <div>
            {orderForm?.items.map((x) => (
              <div>
                <div>{x.quantity}</div>
                <div>{x.name}</div>
                <div>{Math.round(x.price * 85)}</div>
                <div>{x.discount} %</div>
                <div>
                  {Math.round(
                    x.price * 85 - x.price * 85 * (x.discount / 100)
                  ) * x.quantity}
                </div>
              </div>
            ))}
          </div>
          <div>
            <div>Order Placed Date: </div>
            <div> {orderForm?.date}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDone;
