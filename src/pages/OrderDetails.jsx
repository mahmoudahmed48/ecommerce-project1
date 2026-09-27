import { useContext } from "react";
import { useParams } from "react-router-dom";
import { OrderContext } from "../context/OrderConext";
import { Link } from "react-router-dom";

const OrderDetails = () => {
  const { id } = useParams();
  const { getOrderById } = useContext(OrderContext);

  const order = getOrderById(id);

  if (!order) {
    return (
      <div
        className="container"
        style={{ padding: "80px 20px", textAlign: "center" }}
      >
        <h2>Order Not Found!</h2>
        <Link to="/orders" className="btn" style={{ marginTop: "20px" }}>
          Back To Orders
        </Link>
      </div>
    );
  }

  return (
    <section className="order-details">
      <div className="container">
        <Link to="/orders" className="back-link">
          <i className="fas fa-arrow-left"></i> Back to orders
        </Link>

        <div className="success-banner">
          <i className="fas fa-check-circle"></i>
          <div>
            <h2>Order Placed Successfully!</h2>
            <p>Thanks for your purchase. Your order is being processed.</p>
          </div>
        </div>

        <div className="details-layout">
          <div className="order-info">
            <div className="info-card">
              <h3>
                <i className="fas fa-truck"></i> Shipping to
              </h3>
              <p>
                <strong>{order.shipping.name}</strong>
              </p>
              <p>{order.shipping.address}</p>
              <p>
                <strong>{order.shipping.city}</strong>
              </p>

              <p>
                <i className="fas fa-phone"></i> {order.shipping.phone}
              </p>
            </div>
          </div>

          <div className="order-items">
            <h3>Items ({order.items.length})</h3>
            {order.items.map((item) => (
              <div key={item.id} className="item-row">
                <img src={item.image} alt={item.name} />

                <div className="item-details">
                  <p>{item.name}</p>
                  <span>
                    Qty: {item.quantity} * ${item.price.toFixed(2)}
                  </span>
                </div>
                <span className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}

            <div className="total-row">
              <span>Total</span>
              <span>${order.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
            .order-details
            {
                padding: 40px 0;
                background: var(--bg);
                min-height: 70vh;
            }

            .back-link
            {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                color: var(--secondary);
                text-decoration: none;
                margin-bottom: 20px;
                font-weight: 500
            }

            .back-link:hover
            {
                color: var(--primary);
            }

            .success-banner
            {
                background: #2ecc71;
                color: white;
                padding: 25px;
                border-radius: 10px;
                display: flex;
                align-items: center;
                gap: 20px;
                margin-bottom: 30px;
            }

            .success-banner i 
            {
                font-size: 3rem;
            }

            .success-banner h2
            {
                margin-bottom: 5px;
            }

            .success-banner p
            {
                opacity: 0.9
            }

            .details-layout
            {
                display: grid;
                grid-template-columns: 1fr 2fr;
                gap: 25px;
            }

            .info-card
            {
                min-height: 70vh;
            }


            .info-card,
            .order-items
            {
                background: white;
                padding: 20px;
                border-radius: 10px;
                box-shadow: var(--shadow);
                margin-bottom: 20px;
            }

            .info-card h3,
            .order-items h3
            {
                margin-bottom: 15px;
                padding-bottom: 12px;
                border-bottom: 2px solid var(--bg);
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .info-card h3 i
            {
                color: var(--secondary)
            }

            .info-card p
            {
                margin-bottom: 8px;
                color: #555;
                font-size: 0.95rem
            }

            .item-row
            {
                display: grid;
                grid-template-columns: 60px 1fr auto;
                gap: 15px;
                align-items: center;
                padding: 12px 0;
                border-bottom: 1px solid #eee;
            }

            .item-row img 
            {
                width: 60px;
                height: 60px;
                object-fit: cover;
                border-radius: 8px;
            }

            .item-details p
            {
                font-weight: 500;
                margin-bottom: 3px;
            }

            .item-details span
            {
                color: #777;
                font-size: 0.85rem;
            }

            .item-total
            {
                font-weight: bold;
                color: var(--secondary);
            }

            .total-row
            {
                display: flex;
                justify-content: space-between;
                font-size: 1.3rem;
                font-weight: bold;
                padding-top: 15px;
                margin-top: 10px;
                border-top: 2px solid var(--bg);
            }

            @media (max-width: 768px)
            {
                .details-layout
                {
                    grid-template-columns: 1fr;
                }

                .success-banner
                {
                    flex-direction: column;
                    text-align: center;
                }
            }

            `}
      </style>
    </section>
  );
};

export default OrderDetails;
