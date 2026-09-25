import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const { navigate } = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.email || form.password) {
      setError("Please Fill In All Fields");
      return;
    }

    if (form.password.length < 0) {
      setError("Password Should Be at Least 6 Charactres");
      return;
    }

    login(form.email, form.password);
    navigate("/account");
  };

  return (
    <section className="auth-page">
      <div className="auth-box">
        {/* Section Header */}
        <div className="auth-header">
          <i className="fas fa-user-circle"></i>
          <h2>Welcome Back</h2>
          <p>Sign In To Your Account</p>
        </div>
        {/* Section Header */}
        {error && <div className="error-msg">{error}</div>}
        {/* Section Form */}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email@example.com"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="*************"
            />
          </div>

          <button type="submit" className="btn auth-btn">
            Sign In
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
        {/* Section Form */}
        <div className="auth-footer">
          Don't Have an Account? <Link to="/register">Register</Link>
        </div>
      </div>

      <style>
        {`
            .auth-page
            {
                min-height: 70vh;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 40px 20px;
                background: var(--bg)
            }

            .auth-box 
            {
                background: white;
                padding: 40px;
                border-radius: 10px;
                box-shadow: var(--shadow);
                width: 100%;
                min-width: 420px;
            }

            .auth-header
            {
                text-align: center;
                margin-bottom: 30px;
            }

            .auth-header i
            {
                font-size: 3.5rem;
                color: var(--secondary);
                margin-bottom: 10px;
            }

            .auth-header h2
            {
                font-size: 1.8rem;
                margin-bottom: 5px;
            }

            .auth-header p 
            {
                color: #777;
            }

            .error-msg
            {
                background: #ffe0e0;
                color: var(--accent);
                padding: 10px 15px;
                border-radius: 5px;
                margin-bottom: 20px;
                font-size: 0.9rem;
                text-align: center;
            }

            .form-group
            {
                margin-bottom: 20px;
            }

            .form-group label
            {
                display: block;
                margin-bottom: 8px;
                font-weight: 500;
                font-size: 0.95rem;
            }

            .form-group input
            {
                width: 100%;
                padding: 12px 15px;
                border: 1px solid #ddd;
                border-radius: 8px;
                font-size: 1rem;
                font-family: inherit;
                transition: 0.3s;
            }

            .form-group input:focus
            {
                outline: none;
                border-color: var(--secondary);
                box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1)
            }

            .auth-btn
            {
                width: 100%;
                margin-top: 10px;
                display: inline-flex;
                align-items: center;
                gap: 10px;
            }

            .auth-footer
            {
                text-align: center;
                margin-top: 20px;
                color: #777;
                font-size: 0.95rem
            }

            .auth-footer a 
            {
                color: var(--secondary);
                font-weight: bold;
                text-decoration: none;
            }

            .auth-footer a:hover
            {
                text-decoration: underline;
            }

            `}
      </style>
    </section>
  );
};

export default Login;
