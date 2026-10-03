import { useContext, useState } from "react";
import { ToastContext } from "../context/ToastContext";

const Contact = () => {
  const { showToast } = useContext(ToastContext);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      showToast("Please fill all fields", "error");
      return;
    }

    showToast("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact-page">
      <div className="container">
        <h2 className="section-title">
          Contact <span>Us</span>
        </h2>
        <div className="contact-layout">
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Have a question or feedback? we'd love to hear from you.</p>

            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h4>Address</h4>
                <p>Cairo, Egypt</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>info@shop.com</p>
              </div>
            </div>

            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+20 12 3456789</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows="5"
              ></textarea>
            </div>
            <button type="submit" className="btn">
              Send Message <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
      <style>
        {`
            .contact-page
            {
                padding: 60px 0;
                background: var(--bg);
                min-height: 70vh;
            }

            .contact-layout
            {
                display: grid;
                grid-template-columns: 1fr 1.5fr;
                gap: 30px;
                max-width: 1000px;
                margin: 0 auto;
            }

            .contact-info,
            .contact-form
            {
                background: white;
                padding: 30px;
                border-radius: 10px;
                box-shadow: var(--shadow)
            }

            .contact-info h3
            {
                margin-bottom: 15px;
                color: var(--secondary);
            }

            .contact-info > p 
            {
                color: #777;
                margin-bottom: 25px;
            }

            .info-item
            {
                display: flex;
                gap: 15px;
                margin-bottom: 20px;
                align-items: flex-start;
            }

            .info-item i
            {
                font-size: 1.3rem;
                color: var(--secondary);
                width: 40px;
                height: 40px;
                background: var(--bg);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-shrink: 0;
            }

            .info-item h4
            {
                margin-bottom: 3px;
                font-size: 1rem;
            } 

            .info-item p 
            {
                color: #777;
                font-size: 0.9rem;
            }

            .form-group
            {
                margin-bottom: 18px;
            }

            .form-group label 
            {
                display: block;
                margin-bottom: 6px;
                font-weight: 500;
                font-size: 0.95rem;
            }

            .form-group input,
            .form-group textarea
            {
                width: 100%;
                padding: 12px 15px;
                border: 1px solid #ddd;
                border-radius: 8px;
                font-size: 1rem;
                font-family: inherit;
                transition: 0.3s;
                resize: vertical;
            }

            .form-group input:focus,
            .form-group textarea:focus
            {
                outline: none;
                border-color: var(--secondary);
                box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.15);
            }

            .contact-form .btn 
            {
                display: inline-flex;
                align-items: center;
                gap: 10px;
            }

            @media(max-width: 768px)
            {
                .contact-layout
                {
                    grid-template-columns: 1fr;
                }
            }


            
            `}
      </style>
    </section>
  );
};

export default Contact;
