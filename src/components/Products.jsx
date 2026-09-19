import { products } from "../data/data";

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="section-title">
          Featured <span>Products</span>
        </h2>
        <div className="grid-4">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />

              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.category}</p>
                <div className="product-footer">
                  <span className="price">${product.price.toFixed(2)}</span>
                  <button className="add-btn">
                    <i className="fas fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
            .products 
            {
                padding: 40px 0;
                background: var(--bg)
            }

            .product-card 
            {
                background:white;
                border-radius: 10px;
                overflow: hidden;
                box-shadow: 0 2px 5px rgba(0,0,0,0.05);
                transition:0.3s;
            }

            .product-card:hover 
            {
                transform: translateY(-5px);
                box-shadow: var(--shadow);
            }

            .product-card img 
            {
                height: 200px;
            }

            .product-info 
            {
                padding: 15px
            }

            .product-info p 
            {
                color: #777;
                font-size: 0.9rem;
                margin-bottom: 10px;
            }

            .product-info h3 
            {
                font-size: 1rem;
                margin-bottom: 5px;
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
                color: var(--secondary);
            }

            .add-btn
            {
                background: var(--secondary);
                color: white;
                border: none;
                padding: 8px 15px;
                border-radius: 20px;
                cursor: pointer;
                transition: 0.3s;
            }

            .add-btn:hover
            {
                background: #2980b9;
                transform: scale(1.05);
            }

            `}
      </style>
    </section>
  );
};

export default Products;
