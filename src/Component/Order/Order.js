import { Table, TableCell, TableHead, TableRow } from "@material-ui/core";
import React, { useContext } from "react";
import SideBar from "../SideBar/SideBar";
import { UserContext } from "../Sign_In_Context";
import "./Order.css";
const Order = () => {
  const [user, setUser] = useContext(UserContext);
  return (
    <div className="profile">
      <SideBar></SideBar>
      <div className="order">
        <h2>My Orders</h2>
        <div className="orderTable">
          <div className="orderTable__top">
            <div>Order No.</div>
            <div>Details</div>
            <div>Order Date</div>
            <div>Order Status</div>
            <div>Payment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
