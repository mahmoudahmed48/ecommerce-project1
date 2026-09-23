import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { categories, products } from "../data/data";
import { Link } from "react-router-dom";

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <section className="shop">
      <div className="container">
        <h2 className="section-title">
          All <span>Products</span>
        </h2>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button
            className={filter === "All" ? "active" : ""}
            onClick={() => setFilter("All")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={filter === cat.name ? "active" : ""}
              onClick={() => setFilter(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid-4">
          {filtered.map((product) => (
            <div key={product.id} className="product-card">
              <Link to={`/product/${product.id}`}>
                <img src={product.image} alt={product.name} />
              </Link>

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <div className="product-footer">
                  <span className="price">${product.price.toFixed(2)}</span>
                  <button
                    className="add-btn"
                    onClick={() => addToCart(product)}
                  >
                    <i className="fas fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="no-products">No Products Found in This Category.</p>
        )}
      </div>

      <style>
        {`
            .shop
            {
                padding: 40px 0;
                background: var(--bg);
                min-height: 60vh;
            }

            .filter-buttons
            {
                display: flex;
                justify-content: center;
                gap: 10px;
                margin-bottom: 30px;
                flex-wrap: wrap;
            }

            .filter-buttons button 
            {
                padding: 8px 20px;
                border: 2px solid var(--secondary);
                background: white;
                color: var(--secondary);
                border-radius: 25px;
                cursor: pointer;
                transition: 0.3s;
                font-size: 0.95rem
            }

            .filter-buttons button:hover,
            .filter-buttons button:active
            {
                background: var(--secondary);
                color: white;
            }

            .product-card
            {
                background: white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                transition: 0.3s
            }

            .product-card:hover
            {
                transform: translateY(-5px);
                box-shadow: var(--shadow);
            }

            .product-card:img
            {
                height:200px
            }

            .product-info
            {
                padding:15px
            }

            .product-info h3
            {
                font-size: 1rem;
                margin-bottom: 5px
            }

            .product-info p
            {
              color: #777;
              font-size: 0.9rem;
              margin-bottom: 10px;
            }

            .product-footer
            {
              display: flex;
              justify-content: space-between;
              align-items: center;
            }

            .price
            {
              font-size: 1.2rem;
              font-weight: bold;
              color: var(--secondary)
            }

            .add-btn
            {
              background: var(--secondary);
              color: white;
              border: none;
              padding: 8px 15px;
              border-radius: 20px;
              cursor: pointer;
              transition: 0.3s
            }

            .add-btn:hover
            {
              background: #2980b9;
              transform: scale(1.05)
            }

            .no-products
            {
              text-align: center;
              color: #777;
              font-size: 1.1rem;
              margin-top: 30px
            }



            `}
      </style>
    </section>
  );
};

export default Shop;
