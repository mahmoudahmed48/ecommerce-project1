import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { totalItems } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

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
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop">Shop</NavLink>
            </li>
            {user && (
              <li>
                <NavLink to="/account">Account</NavLink>
              </li>
            )}
          </ul>

          <div className="nav-right">
            {user ? (
              <div className="user-menu">
                <span className="user-name">
                  <i className="fas fa-user-circle"></i> {user.name}
                </span>

                <button
                  className="logout-icon"
                  onClick={handleLogout}
                  title="logout"
                >
                  <i className="fas fa-sign-out-alt"></i>
                </button>
              </div>
            ) : (
              <div className="auth-links">
                <Link to="login" className="auth-link">
                  Login
                </Link>
                <Link to="register" className="auth-link register">
                  Register
                </Link>
              </div>
            )}
          </div>

          {/* Links */}
          {/* Cart */}
          <Link to="/cart" className="cart">
            <i className="fas fa-shopping-cart"></i>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
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
                gap: 20px;
            }

            .logo 
            {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 1.5rem;
                font-weight: bold;
                color: white;
                text-decoration: none;
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
                color: var(--secondary);
            }

            .nav-right
            {
              display: flex;
              align-items: center;
              gap: 20px;
            }

            .auth-links
            {
              display: flex;
              gap: 10px;
            }

            .auth-link
            {
              color: white;
              text-decoration: none;
              padding: 6px 15px;
              border-radius: 20px;
              border: 1px solid white;
              font-size: 0.9rem;
              transition: 0.3s;
            }

            .auth-link:hover
            {
              background: white;
              color: var(--primary);
            }

            .auth-link.register
            {
              background: var(--secondary);
              border-color: var(--secondary);
            }

            .auth-link.register:hover
            {
              background: #2980b9;
              border-color: #2980b9;
              color: white;
            }

            .user-menu
            {
              display: flex;
              align-items: center;
              gap: 10px;
            }

            .user-name
            {
              font-size: 0.95rem;
              display: flex;
              align-items: center;
              gap: 6px;
            }

            .logout-icon
            {
              background: none;
              border: none;
              color: var(--accent);
              font-size: 1.2rem;
              cursor: pointer;
              transition: 0.3s
            }

            .logout-icon:hover
            {
              transform: scale(1.15);
            }

            .cart
            {
                position: relative;
                font-size: 1.5rem;
                cursor: pointer;
                color: white;
                text-decoration: none;
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

                .user-name
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
