import React, { createContext, useEffect, useState } from "react";
export const AllOrderContext = createContext();

export const OrderContext = (props) => {
  const [allOrder, setAllOrder] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/order")
      .then((response) => response.json())
      .then((data) => {
        setAllOrder(data);
      });
  }, []);
  return (
    <AllOrderContext.Provider value={[allOrder, setAllOrder]}>
      {props.children}
    </AllOrderContext.Provider>
  );
};
