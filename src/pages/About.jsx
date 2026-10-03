const About = () => {
  return (
    <section className="about-page">
      <div className="container">
        <h2 className="section-title">
          About <span>Us</span>
        </h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Welcome to Cartiva</h3>
            <p>
              We are a modern ecommerce platform dedicated to providing
              high-quality products at the best price. Our mission is to make
              online shopping simple, enjoyable, and accessible to everyone.
            </p>
            <p>
              From electronics to fashion, home essentials to beauty products,
              we carefully curate our collection to ensure you get only the
              best.
            </p>
            <div className="about-stats">
              <div className="stat">
                <i className="fas fa-box"></i>
                <h4>+10K</h4>
                <p>Products</p>
              </div>
              <div className="stat">
                <i className="fas fa-users"></i>
                <h4>+3K</h4>
                <p>Happy Customers</p>
              </div>
              <div className="stat">
                <i className="fas fa-star"></i>
                <h4>+4.9</h4>
                <p>Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
            .about-page
            {
                padding: 60px 0;
                background: var(--bg);
                min-height: 70vh;
            }

            .about-content
            {
                background: white;
                padding: 40px;
                border-radius: 10px;
                box-shadow: var(--shadow);
                max-width: 900px;
                margin: 0 auto;
            }

            .about-text h3
            {
                font-size: 1.8rem;
                margin-bottom: 20px;
                color: var(--secondary);
            }

            .about-text p
            {
                color: #555;
                line-height: 1.8;
                margin-bottom: 15px;
                font-size: 1.05rem;
            }

            .about-stats
            {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 20px;
                margin-top: 30px;
            }

            .stat 
            {
                text-align: center;
                padding: 20px;
                background: var(--bg);
                border-radius: 10px;
            }

            .stat i 
            {
                font-size: 2rem;
                color: var(--secondary);
                margin-bottom: 10px;
            }

            .stat h4
            {
                font-size: 1.8rem;
                color: var(--primary);
                margin-bottom: 5px;
            }

            .stat p
            {
                color: #777;
                font-size: 0.9rem;
            }

            @media(max-width: 600px)
            {
                .about-stats
                {
                    grid-template-columns: 1fr;
                }

                .about-content
                {
                    padding: 25px;
                }
            }
            
            `}
      </style>
    </section>
  );
};

export default About;
