import { categories } from "../data/data";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="categories">
      <div className="container">
        <h2 className="section-title">
          Shop By <span>Category</span>
        </h2>

        <div className="grid-4">
          {categories.map((cat) => (
            <Link to="/shop" key={cat.id} className="category-card">
              <div className="icon-wrapper" style={{ background: cat.color }}>
                <i className={`fas ${cat.icon}`}></i>
              </div>
              <h3>{cat.name}</h3>
              <p>12 Products</p>
            </Link>
          ))}
        </div>
      </div>
      <style>
        {`
            .categories 
            {
                padding: 40px 0;
                background: white;
            }

            .category-card
            {
                text-align: center;
                padding: 30px 20px;
                background: var(--bg);
                border-radius: 10px;
                transition: 0.3s;
                cursor: pointer;
                text-decoration: none;
                color: var(--primary);
                display: block;
            }

            .category-card:hover 
            {
                transform: translateY(-5px);
                box-shadow: var(--shadow);
            }

            .icon-wrapper
            {
                width: 70px;
                height: 70px;
                border-radius: 50%;
                display:flex;
                align-items:center;
                justify-content:center;
                margin: 0 auto 15px;
                font-size: 2rem;
                color: white;
            }

            .category-card h3
            {
                font-size: 1.1rem;
                margin-bottom: 5px;
            }

            .category-card p
            {
                color: #777;
                font-size: 0.9rem;
            }
        `}
      </style>
    </section>
  );
};

export default Categories;
