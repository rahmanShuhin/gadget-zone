import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../FirebaseConfig";
import Products from "../Products/Products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
const TopDells = () => {
  const [product, setProducts] = useState([]);
  const [active, setActive] = useState("all");
  const settings = {
    className: "center",
    dots: false,
    centerMode: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  const getProduct = (x) => {
    setActive(x);
    if (x !== "all") {
      db.collection("products")
        .limit(12)
        .where("category", "==", x)
        .orderBy("discount", "desc")
        .onSnapshot((snapshot) =>
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      db.collection("products")
        .where("discount", ">", 0)
        .limit(12)
        .orderBy("discount", "desc")
        .onSnapshot((snapshot) =>
          setProducts(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  };
  useEffect(() => {
    db.collection("products")
      .where("discount", ">", 0)
      .limit(12)
      .orderBy("discount", "desc")
      .onSnapshot((snapshot) =>
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);
  return (
    <div className="topSelling">
      <div className="topSelling__top">
        <h2>TOP DELLS</h2>
        <div className="topSelling_catagories">
          <button
            onClick={() => getProduct("all")}
            className={active === "all" && "active_btn"}
          >
            All
          </button>
          <button
            onClick={() => getProduct("android")}
            className={active === "android" && "active_btn"}
          >
            Mobile
          </button>
          <button
            onClick={() => getProduct("laptop")}
            className={active === "laptop" && "active_btn"}
          >
            Laptop
          </button>
          <button
            onClick={() => getProduct("camera")}
            className={active === "camera" ? "active_btn diff" : "diff"}
          >
            Camera
          </button>
        </div>
        <div className="topSelling__product__container">
          <Slider {...settings}>
            {product.map((x) => (
              <Products x={x} key={x.id}></Products>
            ))}
          </Slider>
        </div>
        <div className="viewMore__btn">
          <Link className="link" to={`/product/${active}`}>
            <Button variant="contained" color="primary">
              View More <ArrowRightAltIcon></ArrowRightAltIcon>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopDells;
