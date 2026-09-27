import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { OrderContext } from "../context/OrderConext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, totalPrice, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const { placeOrder } = useContext(OrderContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: user?.name || "",
    address: "",
    city: "",
    phone: "",
    payment: "cash",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.address || !form.city || !form.phone) {
      setError("Please fill all shipping details");
      return;
    }

    const orderId = placeOrder({
      user: user.email,
      items: cartItems,
      total: totalPrice,
      shipping: {
        name: form.name,
        address: form.address,
        city: form.city,
        phone: form.phone,
      },
      payment: form.payment,
    });

    clearCart();
    navigate(`/orders/${orderId}`);
  };

  return (
    <section className="checkout-page">
      <div className="container">
        <h2 className="section-title">
          Check<span> Out</span>
        </h2>
        <div className="checkout-layout">
          <form className="checkout-form" onSubmit={handleSubmit}>
            {error && <div className="error-msg">{error}</div>}

            <h3>
              <i className="fas fa-truck"></i> Shipping Info
            </h3>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Address"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  placeholder="City"
                />
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+20 123 ..."
                />
              </div>
            </div>

            <h3>
              <i className="fas fa-credit-card"></i> Payment
            </h3>

            <div className="payment-options">
              <label className={form.payment === "cash" ? "active" : ""}>
                <input
                  type="radio"
                  name="payment"
                  value="cash"
                  onChange={handleChange}
                  checked={form.payment === "cash"}
                />
                <i className="fas fa-money-bill-wave"></i> Cash on delivery
              </label>

              <label className={form.payment === "card" ? "active" : ""}>
                <input
                  type="radio"
                  name="payment"
                  value="card"
                  onChange={handleChange}
                  checked={form.payment === "card"}
                />
                <i className="fas fa-credit-card"></i> Credit Card
              </label>
            </div>

            <button type="submit" className="btn place-order-btn">
              Place Order <i className="fas fa-check"></i>
            </button>
          </form>

          <div className="order-summary">
            <h3>Order Summary</h3>
            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />

                  <div>
                    <p>{item.name}</p>
                    <span>Qty: {item.quantity}</span>
                  </div>

                  <span className="item-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
            .checkout-page
            {
                padding: 40px 0;
                background: var(--bg);
                min-height: 70vh;
            }

            .checkout-layout
            {
                display: grid;
                grid-template-columns: 2fr 1fr;
                gap: 30px;
            }

            .checkout-form,
            .order-summary
            {
                background: white;
                padding: 25px;
                border-radius: 10px;
                box-shadow: var(--shadow);
            }

            .checkout-form h3
            {
                margin-bottom: 20px;
                margin-top: 10px;
                display: flex;
                align-items: center;
                gap: 10px;
                color: var(--primary)
            }

            .checkout-form h3 i 
            {
                color: var(--secondary)
            }

            .error-msg
            {
                background: #ffe0e0;
                color: var(--accent);
                padding: 10px 15px;
                border-radius: 5px;
                margin-bottom: 20px;
                font-size: 0.9rem;
                text-align: center;
            }

            .form-group
            {
                margin-bottom: 15px;
            }

            .form-group label
            {
                display: block;
                margin-bottom: 6px;
                font-weight: 500;
                font-size: 0.9rem;
            }

            .form-group input
            {
                width: 100%;
                padding: 10px 14px;
                border: 1px solid #ddd;
                border-radius: 8px;
                font-size: 1rem;
                font-family: inherit;
                transition: 0.3s;
            }

            .form-group input:focus
            {
                outline: none;
                border-color: var(--secondary);
                box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.15);
            }

            .form-row
            {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
            }

            .payment-options
            {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 15px;
                margin-bottom: 25px;
            }

            .payment-options label
            {
                border: 2px solid #ddd;
                padding: 15px;
                border-radius: 8px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 10px;
                transition: 0.3s;
            }

            .payment-options label.active 
            {
                border-color: var(--secondary);
                background: rgba(52, 152, 219, 0.05)
            }

            .payment-options input
            {
                display: none
            }

            .payment-options i
            {
                color: var(--secondary);
                font-size: 1.2rem;
            }

            .place-order-btn
            {
                width: 100%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }

            .order-summary h3
            {
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 2px solid var(--bg);
            }

            .summary-items
            {
                max-height: 300px;
                overflow-y: auto;
                margin-bottom: 20px;
            }

            .summary-item
            {
                display: grid;
                grid-template-columns: 50px 1fr auto;
                gap: 10px;
                align-items: center;
                margin-bottom: 12px;
            }

            .summary-item img
            {
                width: 50px;
                height: 50px;
                object-fit: cover;
                border-radius: 6px;
            }

            .summary-item p
            {
                font-size: 0.9rem;

            }

            .summary-item span
            {
                font-size: 0.8rem;
                color: #777;
            }

            .item-total
            {
                font-weight: bold;
                color: var(--secondary);
            }

            .summary-row.total 
            {
                display: flex;
                justify-content: space-between;
                font-size: 1.3rem;
                font-weight: bold;
                padding-top: 15px;
                border-top: 2px solid var(--bg);
            }

            @media(max-width: 768px)
            {
                .checkout-layout
                {
                    grid-template-columns: 1fr;
                }

                .payment-options
                {
                    grid-template-columns: 1fr;
                }
            }



            
            `}
      </style>
    </section>
  );
};

export default Checkout;
