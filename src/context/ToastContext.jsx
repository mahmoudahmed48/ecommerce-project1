import { createContext, useState } from "react";

export const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });

    setTimeout(() => setToast(null), 2500);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          <i
            className={
              toast.type === "success"
                ? "fas fa-check-circle"
                : "fas fa-exclamation-circle"
            }
          ></i>
          <span>{toast.message}</span>

          <style>
            {`
                                .toast 
                                {
                                    position: fixed;
                                    bottom: 30px;
                                    right: 30px;
                                    padding: 15px 22px;
                                    border-radius: 10px;
                                    color: white;
                                    display: flex;
                                    align-items: center;
                                    gap: 12px;
                                    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
                                    z-index: 9999;
                                    animation: slideIn 0.3s ease;
                                    font-size: 0.95rem;
                                    font-weight: 500;
                                }

                                .toast-success 
                                {
                                    background: #2ecc71;
                                }

                                .toast-error
                                {
                                    background: var(--accent);
                                }

                                .toast i
                                {
                                    font-size: 1.2rem;
                                }

                                @keyframes slideIn {
                                
                                from {
                                    transform: translateX(120%);
                                    opacity: 0;
                                }

                                to {
                                    transform: translateX(0);
                                    opacity: 1;
                                }

                                }

                                @media (max-width: 500px)
                                {
                                    .toast
                                    {
                                        right: 15px;
                                        left: 15px;
                                        bottom: 15px;
                                        justify-content: center;
                                    }
                                }

                                `}
          </style>
        </div>
      )}
    </ToastContext.Provider>
  );
};
