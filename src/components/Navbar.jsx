import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-wrapper">
          {/* Logo */}
          <Link to="/" className="logo">
            <i className="fas fa-store"></i>
            <span>Cartiva</span>
          </Link>
          {/* Logo */}
          {/* Links */}
          <ul className="nav-links">
            <li>
              <NavLink to="/" className="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            <li>
              <NavLink to="">About</NavLink>
            </li>
          </ul>
          {/* Links */}
          {/* Cart */}
          <Link to="/cart" className="cart">
            <i className="fas fa-shopping-cart"></i>
            <span className="cart-count">0</span>
          </Link>
          {/* Cart */}
        </div>
      </div>
      <style>
        {`
            .navbar
            {
                background: var(--primary);
                color: white;
                padding: 15px 0;
                position: sticky;
                top: 0;
                z-index: 100;
            }

            .nav-wrapper
            {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .logo 
            {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 1.5rem;
                font-weight: bold;
            }

            .logo i 
            {
                font-size: 1.8rem;
                color: var(--secondary)
            }

            .nav-links
            {
                display: flex;
                list-style: none;
                gap: 30px
            }

            .nav-links a
            {
                color: white;
                text-decoration: none;
                padding: 5px 0;
                border-bottom: 2px solid transparent;
                transition: 0.3s;
            }

            .nav-links a:hover,
            .nav-links a.active 
            {
                border-bottom-color: var(--secondary);
                color: var(--secondary)
            }

            .cart
            {
                position: relative;
                font-size: 1.5rem;
                cursor: pointer;
            }

            .cart-count
            {
                position: absolute;
                top: -10px;
                right: -12px;
                background: var(--accent);
                color: white;
                border-radius: 50%;
                padding: 2px 8px;
                font-size: 0.7rem;
                font-weight: bold;
            }

            @media (max-width: 600px)
            {
                .nav-links
                {
                    display: none;
                }
            }

        `}
      </style>
    </nav>
  );
};

export default Navbar;
