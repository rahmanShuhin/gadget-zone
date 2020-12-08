import React, { useContext, useEffect, useState } from "react";
import { Card, Grid, Modal, Snackbar } from "@material-ui/core";

import { AllDataContext } from "../MainContext";
import TableData from "./TableData";
import { AllOrderContext } from "../OrderContext";

const AdminDashboard = () => {
  const [allProduct, setAllProduct] = useContext(AllDataContext);
  const [allOrder, setAllOrder] = useContext(AllOrderContext);
  const [order, setOrder] = useState([]);

  const handleUpdate = (id, price, dis) => {
    const newarr = allProduct.map((x) => {
      if (x._id === id) {
        x.price = price * 85;
        x.discount = dis;
        return x;
      } else {
        return x;
      }
    });
    setAllProduct(newarr);
  };
  const handleDelete = (id) => {
    const newArr = allProduct.filter((x) => x._id !== id);
    setAllProduct(newArr);
  };
  return (
    <div className="adminDashboard">
      <Grid container>
        <Grid item xs={12} sm={6}>
          <Card>
            <h2>Total Product</h2>
            <h3>{allProduct?.length}</h3>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <h2>Total Order</h2>
            <h3>{allOrder.length}</h3>
          </Card>
        </Grid>
        <table>
          <tr>
            <th>Pro. Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {allProduct.map((x) => (
            <TableData
              data={x}
              del={handleDelete}
              upd={handleUpdate}
            ></TableData>
          ))}
        </table>
      </Grid>
    </div>
  );
};

export default AdminDashboard;
