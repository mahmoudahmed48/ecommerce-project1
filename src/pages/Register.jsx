import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const { register } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!form.name || !form.email || !form.password || !form.confirm) {
      setError("Please fill in all fields");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (form.password !== form.confirm) {
      setError("passwords do not match");
      return;
    }

    register(form.name, form.email, form.password);
    navigate("/account");
  };

  return (
    <section className="auth-page">
      <div className="auth-box">
        <div className="auth-header">
          <i className="fa fa-user-plus"></i>
          <h2>Create Account</h2>
          <p>Join us today</p>
        </div>
        {error && <div className="error-msg">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              value={form.name}
              name="name"
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={form.email}
              name="email"
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={form.password}
              name="password"
              onChange={handleChange}
              placeholder="*************"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              value={form.confirm}
              name="confirm"
              onChange={handleChange}
              placeholder="*************"
            />
          </div>

          <button type="submit" className="btn auth-btn">
            Create Account <i className="fas fa-arrow-right"></i>
          </button>
        </form>

        <p className="auth-footer">
          Already Have an Account? <Link to="/login">Login</Link>{" "}
        </p>
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
                background: var(--bg);
            }

            .auth-box
            {
                background: white;
                padding: 40px;
                border-radius: 10px;
                box-shadow: var(--shadow);
                width: 100%;
                max-width: 420px;
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
                box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
            }

            .auth-btn
            {
                width: 100%;
                margin-top: 10px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
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

export default Register;
