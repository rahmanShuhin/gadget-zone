import { Table, TableCell, TableHead, TableRow } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { AllOrderContext } from "../OrderContext";
import SideBar from "../SideBar/SideBar";
import { UserContext } from "../Sign_In_Context";
import "./Order.css";
const Order = () => {
  const [user, setUser] = useContext(UserContext);
  const [allOrder] = useContext(AllOrderContext);
  const [myOrder, setMyOrder] = useState([]);
  useEffect(() => {
    if (allOrder.length !== 0) {
      const newArr = allOrder.filter((x) => x.email === user.email);
      setMyOrder(newArr);
    }
  }, [allOrder]);
  return (
    <div className="profile">
      <SideBar init={false}></SideBar>
      <div className="order">
        <h2>My Orders</h2>
        <table>
          <tr>
            <th>Order No.</th>
            <th>Details</th>
            <th>Order Date</th>
            <th>Order Status</th>
            <th>Payment</th>
          </tr>
          {myOrder.map((x, index) => (
            <tr>
              <td>{index + 1}</td>
              <td>
                <ul>
                  {x.items.map((y) => (
                    <li>
                      <small>{y.name}</small>
                    </li>
                  ))}
                </ul>
              </td>
              <td>{x?.date.toString()}</td>
              <td>{x?.status}</td>
              <td>Tk.{x.pay}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default Order;
