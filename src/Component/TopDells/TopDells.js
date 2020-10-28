import { Button, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../FirebaseConfig";
import Products from "../Products/Products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const TopDells = () => {
  const [product, setProducts] = useState([]);
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
  console.log(product);
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
          <button>All</button>
          <button>Mobile</button>
          <button>Laptop</button>
          <button className="diff">Camera</button>
        </div>
        <div className="topSelling__product__container">
          <Slider {...settings}>
            {product.map((x) => (
              <Products x={x} key={x.id}></Products>
            ))}
          </Slider>
        </div>
        <div className="viewMore__btn">
          <Button variant="contained" color="primary">
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TopDells;
