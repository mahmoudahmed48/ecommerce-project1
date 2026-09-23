import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, totalPrice } =
    useContext(CartContext);
  console.log("🛒 CART PAGE ITEMS:", cartItems);

  if (cartItems.length === 0) {
    return (
      <div className="container empty-cart">
        <i className="fas fa-shopping-cart"></i>
        <h2>Your Cart Is Empty</h2>
        <p>Add Some Products to Get Started!</p>
        <Link to="/shop" className="btn">
          Go To Shop
        </Link>

        <style>
          {`
                .empty-cart
                {
                    text-align:center;
                    padding: 80px 20px;
                    min-height: 60vh;
                }

                .empty-cart i
                {
                    font-size: 5rem;
                    color: #ccc;
                    margin-bottom: 20px;
                }

                .empty-cart h2 
                {
                    margin-bottom: 10px;
                }

                .empty-cart p
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
    <section className="cart-page">
      <div className="container">
        <h2 className="section-title">
          Your <span>Cart</span>
        </h2>

        <div className="cart-layout">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />

                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.category}</p>
                  <span className="item-price">${item.price.toFixed(2)}</span>
                </div>

                <div className="item-controls">
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.id)}>
                      <i className="fas fa-minus"></i>
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => increaseQty(item.id)}>
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <i className="fas fa-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3>Order Summary</h3>

            <div className="summary-row">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className="btn checkout-btn">
              Checkout
              <i className="fas fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
          .cart-page
          {
            padding: 40px 0;
            background: var(--var);
            min-height: 60vh;
          }

          .cart-layout
          {
            display: grid;
            grid-template-columns: 2fre 1fr;
            gap: 30px;
          }

          .cart-items
          {
            display: flex;
            flex-direction: column;
            gap: 15px;
          }

          .cart-item
          {
            display: grid;
            grid-template-columns: 100px 1fr auto;
            gap: 20px;
            align-items: center;
            background: white;
            padding: 15px;
            border-radius: 10px;
            box-shadow: 0 2px 5px rbga(0,0,0,0.05)
          }

          .cart-item img
          {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 8px;

          }

          .item-info h3
          {
            font-size: 1.1rem;
            margin-bottom: 5px;
          }

          .item-info p
          {
            color: #777;
            font-size: 0.9rem;
            margin-bottom: 8px;
          }

          .item-price 
          {
            color: var(--secondary);
            font-weight: bold;
            font-size: 1.1rem;
          }

          .item-controls
          {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
            gap: 10px;
          }

          .qty-controls
          {
            display: flex;
            align-items: center;
            gap: 10px;
            border: 1px solid #ddd;
            border-radius: 25px;
            padding: 5px;
          }

          .qty-controls button
          {
            background: var(--bg);
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            cursor: pointer;
            transition: 0.3s;
          }

          .qty-controls button:hover
          {
            background: var(--secondary);
            color: white;
          }

          .qty-controls span
          {
            min-width: 25px;
            text-align: center;
            font-weight: bold;
          }

          .remove-btn
          {
            background: none;
            border: none;
            color: var(--accent);
            cursor: pointer;
            font-size: 1.1rem;
            transition: 0.3s;
          }

          .remove-btn:hover
          {
            transform: scale(1.2);
          }

          .cart-summary
          {
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: var(--shadow);
            height: fit-content;
            position: sticky;
            top: 100px;
          }

          .cart-summary h3
          {
            margin-bottom: 20px;
            padding: bottom: 15px;
            border-bottom: 2px solid var(--bg);
          }

          .summary-row
          {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
            color: #555;
          }

          .summary-row.total
          {
            font-size: 1.3rem;
            font-weight: bold;
            color: var(--primary);
            padding-top: 15px;
            border-top: 2px solid var(--bg);
            margin-top: 15px;
          }

          .checkout-btn
          {
            width: 100%;
            margin-top: 20px;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
          }

          @media(max-width: 768px)
          {
            .cart-layout
            {
              grid-template-column: 1fr;
            }

            .cart-item
            {
              grid-template-column: 80px 1fr;
            }

            .cart-item img
            {
              width: 80px;
              height: 80px;
            }

            .item-controls
            {
              grid-column: 1 / -1;
              flex-direction: row;
              justify-content: space-between;
              align-items: center;
            }

            .cart-summary
            {
              position: static;
            }
          }



          `}
      </style>
    </section>
  );
};

export default Cart;
