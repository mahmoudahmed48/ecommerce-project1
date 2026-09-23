import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <i className="fas fa-store"></i>
              <i>Cartiva</i>
            </Link>
            <p>Your one-stop Shop for Quality Products at the best price.</p>

            <div className="social-icons">
              <a href="#" aria-label="Facebook">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" aria-label="Twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Youtube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/shop">Shop</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Categories</h4>
            <ul>
              <li to="/shop">
                <Link>Electronics</Link>
              </li>
              <li to="/shop">
                <Link>Fashion</Link>
              </li>
              <li to="/shop">
                <Link>Home</Link>
              </li>
              <li to="/shop">
                <Link>Beauty</Link>
              </li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul className="contact-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Cairo, Egypt</span>
              </li>

              <li>
                <i className="fas fa-envelope"></i>
                <span>info@shop.com</span>
              </li>

              <li>
                <i className="fas fa-phone"></i>
                <span>+20123456789</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Cartiva. All rights reserved.</p>
        </div>
      </div>

      <style>
        {`
            .footer 
            {
                background: var(--primary);
                color: white;
                padding: 50px 0 20px;
                margin-top: 40px;
            }

            .footer-grid
            {
                display: grid;
                grid-template-columns: 2fr 1fr 1fr 1.5fr;
                gap: 30px;
                margin-bottom: 30px
            }

            .footer-logo
            {
                display: flex;
                align-items: center;
                gap: 10px;
                font-size: 1.5rem;
                font-weight: bold;
                color: white;
                text-decoration: none;
                margin-bottom: 15px;
            }

            .footer-logo i 
            {
                color: var(--secondary);
                font-size: 1.8rem;
            }

            .footer-col p 
            {
                opacity: 0.8;
                line-height: 1.6;
                margin-bottom: 15px;
            }

            .footer-col h4 
            {
                font-size: 1.1rem;
                margin-bottom: 15px;
                color: var(--secondary);
            }

            .footer-col ul
            {
                list-style: none;
            }

            .footer-col ul li 
            {
                margin-bottom: 10px;
            }

            .footer-col ul li a 
            {
                color: white;
                text-decoration: none;
                opacity: 0.8;
                transition: 0.3s;
            }

            .footer-col ul li a:hover
            {
                opacity: 1;
                color: var(--secondary);
                padding-left: 5px;
            }

            .social-icons
            {
                display: flex;
                gap: 12px;
            }

            .social-icons a 
            {
                width: 40px;
                height: 40px;
                background: rgba(255,255,255,0.1);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                text-decoration: none;
                transition: 0.3s;
            }

            .social-icons a:hover
            {
                background: var(--secondary);
                transform: translateY(-3px);
            }

            .contact-list li
            {
                display: flex;
                align-items: center;
                gap: 10px;
                opacity: 0.8;
            }

            .contact-list li i
            {
                color: var(--secondary);
                width: 20px;
            }

            .footer-bottom
            {
                border-top: 1px solid rgba(255,255,255,0.1);
                padding-top: 20px;
                text-align: center;
                opacity: 0.7;
                font-size: 0.9rem
            }

            @media(max-width: 900px)
            {
                .footer-grid
                {
                    grid-template-columns: 1fr 1fr;
                }
            }

            @media(max-width: 500px)
            {
                .footer-grid
                {
                    grid-template-columns: 1fr;
                    text-align: center;
                }

                .footer-logo
                {
                    justify-content: center;
                }

                .social-icons
                {
                    justify-content: center;
                }

                .contact-list li
                {
                    justify-content: center;
                }
            }



            `}
      </style>
    </footer>
  );
};

export default Footer;
