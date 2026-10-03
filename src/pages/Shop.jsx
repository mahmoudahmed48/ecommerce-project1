import { useState, useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { categories, products } from "../data/data";
import { Link, useSearchParams } from "react-router-dom";
import { ToastContext } from "../context/ToastContext";

const Shop = () => {
  const { addToCart } = useContext(CartContext);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const { showToast } = useContext(ToastContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  useEffect(() => {
    const cat = searchParams.get("category");

    if (cat) {
      setFilter(cat);
      setCurrentPage(1);
    }
  }, [searchParams]);

  // Filterd Products

  const filtered = products.filter((p) => {
    const matchCategory = filter === "All" || p.category === filter;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  // Pagination

  const totalPages = Math.ceil(filtered.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const currentProducts = filtered.slice(
    startIndex,
    startIndex + productsPerPage,
  );

  // Category Handle
  const handleCategoryChange = (cat) => {
    setFilter(cat);
    setCurrentPage(1);

    if (cat === "All") {
      setSearchParams({});
    } else {
      setSearchParams({ category: cat });
    }
  };

  // Search Change
  const handleSearch = (value) => {
    setSearch(value);
    setCurrentPage(1);
  };

  // Page Change
  const goToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleAdd = (product) => {
    addToCart(product);
    showToast(`${product.name} added to cart!`);
  };

  return (
    <section className="shop">
      <div className="container">
        <h2 className="section-title">
          {filter === "All" ? "All" : filter} <span>Products</span>
        </h2>

        {/* Search Bar */}

        <div className="search-bar">
          <i className="fas fa-search"></i>
          <input
            type="text"
            placeholder="Search Products"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />

          {search && (
            <button onClick={() => handleSearch("")} className="clear-btn">
              <i className="fas fa-times"></i>
            </button>
          )}
        </div>

        {/* Search Bar */}

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button
            className={filter === "All" ? "active" : ""}
            onClick={() => handleCategoryChange("All")}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={filter === cat.name ? "active" : ""}
              onClick={() => handleCategoryChange(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid-4">
          {currentProducts.map((product) => (
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
                    onClick={() => handleAdd(product)}
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

        {totalPages > 1 && (
          <div className="pagination">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="page-btn"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`page-btn ${currentPage === page ? "active" : ""}`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={totalPages}
              className="page-btn"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
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

            .search-bar
            {
              display: flex;
              align-items: center;
              background: white;
              border: 1px solid #ddd;
              border-radius: 30px;
              padding: 10px 20px;
              max-width: 500px;
              margin: 0 auto 25px;
              transition: 0.3s;
            }

            .search-bar:focus-within
            {
              border-color: var(--secondary);
              box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.15)
            }

            .search-bar i 
            {
              color: #aaa;
              margin-right: 10px
            }

            .search-bar input
            {
              flex: 1;
              border: none;
              outline: none;
              font-size: 1rem;
              font-family: inherit;
              background: transparent;
            }

            .clear-btn
            {
              background: none;
              border: none;
              color: #aaa;
              cursor: pointer;
              font-size: 1rem;
            }

            .clear-btn:hover
            {
              color: var(--accent);
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
            .filter-buttons button.active 
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

            .product-card img
            {
                height:200px;
                width: 100%;
                object-fit: cover;
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

            .pagination 
            {
              display: flex;
              justify-content: center;
              align-items: center;
              gap: 8px;
              margin-top: 40px;
            }

            .page-btn
            {
              min-width: 40px;
              height: 40px;
              border: 1px solid #ddd;
              background: white;
              color: var(--primary);
              border-radius: 8px;
              cursor: pointer;
              font-size: 0.95rem;
              font-weight: 500;
              transition: 0.3s;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .page-btn:hover:not(:disabled)
            {
              border-color: var(--secondary);
              color: var(--secondary);
            }

            .page-btn.active
            {
              border-color: var(--secondary);
              color: white;
              background: var(--secondary);
            }



            `}
      </style>
    </section>
  );
};

export default Shop;
