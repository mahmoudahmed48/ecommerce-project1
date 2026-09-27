import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { OrderContext } from "../context/OrderConext";
import { Link } from "react-router-dom";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const { getUserOrders } = useContext(OrderContext);

  const myOrders = getUserOrders(user?.email);

  if (myOrders.length === 0) {
    return (
      <div className="container empty-orders">
        <i className="fas fa-box-open"></i>
        <h2>No Orders Yet</h2>
        <p>Start shopping to see your orders here.</p>
        <Link to="/shop" className="btn">
          Go to shop
        </Link>

        <style>
          {`

                        .empty-orders
                        {
                            text-align: center;
                            padding: 80px 20px;
                            min-height: 60vh;
                        }

                        .empty-orders i
                        {
                            font-size: 5rem;
                            color: #ccc;
                            margin-bottom: 20px;
                        }

                        .empty-orders h2
                        {
                            margin-bottom: 10px;
                        }

                        .empty-orders p
                        {
                            color: #777;
                            margin-bottom: 25px;
                        }

            `}
        </style>
      </div>
    );
  }

  return (
    <section className="orders-page">
      <div className="container">
        <h2 className="section-title">
          My <span>Orders</span>
        </h2>

        <div className="orders-list">
          {myOrders.map((order) => (
            <div key={order.id} className="order-card">
              <div className="order-header">
                <div>
                  <span className="order-id">{order.id}</span>
                  <span className="order-date">
                    <i className="fas fa-calendar"></i> {order.date}
                  </span>
                </div>

                <span className={`order-status ${order.status || "pending"}`}>
                  {order.status || "Pending"}
                </span>
              </div>

              <div className="order-body">
                <div className="order-meta">
                  <p>
                    <i className="fas fa-box"></i> {order.items.length} Items
                  </p>
                  <p>
                    <i className="fas fa-money-bill"></i>{" "}
                    {order.total.toFixed(2)}
                  </p>
                  <p>
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    {order.shipping.city}
                  </p>
                </div>

                <Link to={`/orders/${order.id}`} className="btn view-btn">
                  View Details <i className="fas fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>
        {`
          .orders-page
          {
            padding: 40px 0;
            background: var(--bg);
            min-height: 70vh;
          }

          .orders-list
          {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .order-card
          {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: var(--shadow);
          }

          .order-header
          {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 20px;
            background: var(--primary);
            color: white;
          }

          .order-id
          {
            font-weight: bold;
            margin-right: 15px;
          }

          .order-date
          {
            font-size: 0.85rem;
            opacity: 0.8;
          }

          .order-status
          {
            background: #f9ca24;
            color: #2d3436;
            padding: 4px 14px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: bold;
          }

          .order-body
          {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            flex-wrap: wrap;
            gap: 15px;
          }

          .order-meta
          {
            display: flex;
            gap: 25px;
            flex-wrap: wrap;
          }

          .order-meta p 
          {
            color: #555;
            font-size: 0.95rem;
          }

          .order-meta i
          {
            color: var(--secondary);
            margin-right: 5px;
          }

          .view-btn
          {
            padding: 8px 20px;
            font-size: 0.9rem;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            text-decoration: none;
          }

          @media(max-width: 600px)
          {
            .order-body
            {
              flex-direction: column;
              align-items: flex-start;
            }

            .order-meta
            {
              flex-direction: column;
              gap: 8px;
            }
          }

          `}
      </style>
    </section>
  );
};

export default Orders;
