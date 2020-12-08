import { FormControl, Grid, InputLabel, NativeSelect } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import db from "../FirebaseConfig";
import { AllDataContext } from "../MainContext";
import Products from "../Products/Products";
import "./showProduct.css";
const ShowProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [val, setVal] = useState(1);
  const [category, setCategory] = useState([]);
  const [allProduct] = useContext(AllDataContext);
  const sort = ["default", "asc", "desc", "percentage"];
  const [showProduct, setShowProduct] = useState(() => {
    if (product.length !== 0) {
      return product;
    } else {
      return [];
    }
  });
  const handleChange = (event, value) => {
    setVal(value);
  };
  const handleSort = (e) => {
    if (e == 2) {
      const newPro = [...product];
      newPro.sort((a, b) => a.price - b.price);
      setProduct(newPro);
    } else if (e == 3) {
      const newPro = [...product];
      newPro.sort((a, b) => b.price - a.price);
      setProduct(newPro);
    } else if (e == 4) {
      const newPro = [...product];
      newPro.sort((a, b) => b.discount - a.discount);
      setProduct(newPro);
    }
  };

  useEffect(() => {
    if (product.length !== 0) {
      const num1 = (val - 1) * 9;
      const num2 = val * 9;
      //console.log(num1, num2);
      const temp = product.slice(num1, num2);
      setShowProduct(temp);
    }
  }, [product, val]);

  useEffect(() => {
    if (id === "all") {
      setProduct(allProduct);
    } else {
      const arr = allProduct.filter((x) => x.category === id);
      setProduct(arr);
    }
  }, [id, allProduct]);

  //console.log(product)
  return (
    <div className="showProduct">
      <div className="showProduct__top">
        <h3>{id} Gadget </h3>
        <p>{product.length} Results</p>
      </div>
      <div className="showProduct__middle">
        <div>
          <FormControl>
            <InputLabel htmlFor="demo-customized-select-native">
              SORT
            </InputLabel>
            <NativeSelect onChange={(e) => handleSort(e.target.value)}>
              <option value={1}>Featured</option>
              <option value={2}>Price:Low To High</option>
              <option value={3}>Price:High To Low</option>
              <option value={4}>Percentage Discount</option>
            </NativeSelect>
          </FormControl>
        </div>
        <Pagination
          count={Math.ceil(product.length / 9)}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
          page={val}
        />
      </div>
      <Grid container>
        {showProduct.map((x) => (
          <Grid item xs={12} md={4} xl={4}>
            <Products data={x} key={x._id}></Products>
          </Grid>
        ))}
      </Grid>
      <div className="bottom__pagination">
        <Pagination
          count={Math.ceil(product.length / 9)}
          variant="outlined"
          shape="rounded"
          page={val}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ShowProduct;
