import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <section className="account-page">
      <div className="container">
        <h2 className="section-title">
          My <span>Account</span>
        </h2>
        <div className="account-layout">
          <div className="user-card">
            <div className="user-avatar">
              <i className="fas fa-user"></i>
            </div>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button className="btn logout-btn" onClick={handleLogout}>
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          </div>

          <div className="account-content">
            <div className="account-section">
              <h3>
                <i className="fas fa-box"></i>Order History
              </h3>
              <div className="empty-state">
                <i className="fas fa-inbox"></i>
                <p>No orders yet</p>
              </div>
            </div>

            <div className="account-section">
              <h3>
                <i className="fas fa-cog"></i>Settings
              </h3>
              <div className="empty-state">
                <i className="fas fa-tools"></i>
                <p>Comming soon...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        {`
            .account-page
            {
                padding: 40px 0;
                background: var(--bg);
                min-height: 60vh;
            }

            .account-layout
            {
                display: grid;
                grid-template-columns: 300px 1fr;
                gap: 30px;
            }

            .user-card
            {
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: var(--shadow);
                text-align: center;
                min-height: 70vh;
            }

            .user-avatar
            {
                width: 100px;
                height: 100px;
                border-radius: 50%;
                background: var(--secondary);
                display: flex;
                align-items: center;
                justify-content: center;
                margin: 0 auto 15px;
                color: white;
                font-size: 3rem;
            }

            .user-card h3
            {
                font-size: 1.3rem;
                margin-bottom: 5px
            }

            .user-card p
            {
                color: #777;
                font-size: 0.9rem;
                margin-bottom: 20px;
            }

            .layout-btn
            {
                background: var(--accent);
                width: 100%;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                gap: 10px;
            }

            .layout-btn:hover
            {
                background: #c0392b;
            }

            .account-content
            {
                display: flex;
                flex-direction: column;
                gap: 20px;
            }

            .account-section
            {
                background: white;
                padding: 25px;
                border-radius: 10px;
                box-shadow: 0 2px 5px rgba(0,0,0,0.05)
            }

            .account-section h3 
            {
                font-size: 1.2rem;
                margin-bottom: 20px;
                padding-bottom: 15px;
                border-bottom: 2px solid var(--bg);
                display: flex;
                align-items: center;
                gap: 10px;
            }

            .account-section h3 i 
            {
                color: var(--secondary)
            }

            .empty-state
            {
                text-align: center;
                padding: 30px 20px;
                color: #999;
            }

            .empty-state i 
            {
                font-size: 3rem;
                margin-bottom: 10px;
                opacity: 0.4
            }

            @media (max-width: 768px)
            {
                .account-layout
                {
                    grid-template-columns: 1fr;
                    
                }
            }

            
            
            `}
      </style>
    </section>
  );
};

export default Account;
