import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div>
            <h1>
              Discover Amazing <br />
              <span>Products</span>
            </h1>
            <p>Quality products at the best prices. Shop now!</p>
            <button className="btn">
              Shop Now <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="hero-image">
            <i className="fas fa-shopping-bag"></i>
          </div>
        </div>
      </div>

      <style>
        {`
            .hero 
            {
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                padding: 60px 0;
            }

            .hero-content
            {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 40px;
                align-items: center;
            }

            .hero-content h1 
            {
                font-size: 3rem;
                line-height: 1.2;
            }

            .hero-content h1 span 
            {
                color: #f9ca24
            }

            .hero-content p 
            {
                font-size: 1.2rem;
                margin: 20px 0;
                opacity: 0.9
            }

            .hero-image
            {
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 10rem;
                opacity: 0.8;
                background: rgba(255,255,255,0.1);
                border-radius: 20px;
                padding: 40px;
                border: 2px dashed rgba(255, 255, 255, 0.3);
            }

            @media(max-width: 768px)
            {
                .hero-content
                {
                    grid-template-columns: 1fr;
                    text-align: center;
                }

                .hero-content h1 
                {
                    font-size: 2rem
                }

                .hero-image
                {
                    font-size: 5rem;
                    padding: 30px
                }
            }
      `}
      </style>
    </section>
  );
};

export default Hero;
