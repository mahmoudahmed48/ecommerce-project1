import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="notfound">
      <div className="container">
        <h1>404</h1>
        <h2>Page Not Found.</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="btn">
          <i className="fas fa-home"></i> Back to home
        </Link>
      </div>

      <style>
        {`
                .notfound
                {
                    min-height: 70vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    padding: 40px 20px;
                    background: var(--bg);
                }

                .notfound h1
                {
                    font-size: 8rem;
                    color: var(--secondary);
                    line-height: 1;
                }

                .notfound h2
                {
                    font-size: 2rem;
                    margin: 10px 0 15px;
                    color: var(--primary);
                }

                .notfound p
                {
                    color: #777;
                    margin-bottom: 30px;
                    font-size: 1.1rem;
                }

                .notfound .btn 
                {
                    display: inline-flex;
                    align-items: center;
                    gap: 10px;
                    text-decoration: none;
                }

                @media(max-width: 500px)
                {
                    .notfound h1
                    {
                        font-size: 5rem;
                    }

                    .notfound h2
                    {
                        font-size: 1.4rem;
                    }
                }

                `}
      </style>
    </section>
  );
};

export default NotFound;
