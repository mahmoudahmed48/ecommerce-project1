import { createContext, useEffect, useState } from "react";

export const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem("orders");
    if (saved) setOrders(JSON.parse(saved));
  }, []);

  const placeOrder = (orderData) => {
    const newOrder = {
      id: "ORD-" + Date.now(),
      data: new Date().toLocaleDateString("en-GB"),
      ...orderData,
    };

    const updated = [newOrder, ...orders];
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
    return newOrder.id;
  };

  const getUserOrders = (email) => {
    return orders.filter((order) => order.user === email);
  };

  const getOrderById = (id) => {
    return orders.find((order) => order.id === id);
  };

  return (
    <OrderContext.Provider
      value={{ orders, placeOrder, getUserOrders, getOrderById }}
    >
      {children}
    </OrderContext.Provider>
  );
};
