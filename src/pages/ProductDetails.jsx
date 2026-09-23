import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/data";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div
        className="container"
        style={{ padding: "60px 20px", textAlign: "center" }}
      >
        <h2>Product Not Found</h2>
        <Link to="/shop" className="btn" style={{ marginTop: "20px" }}>
          Back To Shop
        </Link>
      </div>
    );
  }

  return (
    <section className="details">
      <div className="container">
        <Link to="/shop" className="back-link">
          <i className="fas fa-arrow-left"></i>
          Back To Shop
        </Link>

        <div className="details-content">
          {/* Image */}
          <div className="details-image">
            <img src={product.image} alt={product.name} />
          </div>

          {/* Info */}
          <div className="details-info">
            <span className="category-tag">{product.category}</span>
            <h1>{product.name}</h1>
            <p className="details-price">${product.price.toFixed(2)}</p>
            <p className="details-description">{product.description}</p>

            <button
              className="btn add-cart-btn"
              onClick={() => addToCart(product)}
            >
              <i className="fas fa-cart-plus"></i>
              Add To Cart
            </button>
          </div>
        </div>
      </div>

      <style>
        {`
            .details 
            {
                padding: 40px 0;
                background: var(--bg);
                min-height: 60vh;
            }

            .back-link
            {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                color: var(--secondary);
                text-decoration: none;
                margin-bottom: 20px;
                font-weight: 500;
                transition: 0.3s
            }

            .back-link:hover
            {
                color: var(--primary)
            }

            .details-content
            {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 40px;
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: var(--shadow);
            }

            .details-image img
            {
                width: 100%;
                height: 400px;
                object-fit: cover;
                border-radius: 10px
            }

            .details-info
            {
                display: flex;
                flex-direction: column;
                justify-content: center;
            }

            .category-tag
            {
                display: inline-block;
                background: var(--secondary);
                color: white;
                padding: 5px 15px;
                border-radius: 20px;
                font-size: 0.8rem;
                margin-bottom: 15px;
                width: fit-content
            }

            .details-info h1 
            {
                font-size: 2rem;
                margin-bottom: 15px;
            }

            .details-price
            {
                font-size: 1.8rem;
                color: var(--secondary);
                font-weight: bold;
                margin-bottom: 20px
            }

            .details-description
            {
                color: #555;
                line-height: 1.8;
                margin-bottom: 30px;
            }

            .add-cart-btn
            {
                width: fit-content;
                display: inline-flex;
                align-items: center;
                gap: 10px
            }

            @media(max-width: 768px)
            {
                .details-content
                {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }

                .details-image img
                {
                    height: 250px;
                }

                .details-info h1
                {
                    font-size: 1.5rem
                }
            }
    

        
            
            `}
      </style>
    </section>
  );
};

export default ProductDetails;
