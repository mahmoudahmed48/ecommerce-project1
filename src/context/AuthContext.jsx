import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (email, password) => {
    const fakeUser = {
      id: Date.now(),
      name: email.split("@")[0],
      email: email,
    };

    setUser(fakeUser);
    localStorage.setItem("user", JSON.stringify(fakeUser));
    return true;
  };

  const register = (name, email, password) => {
    const newUSer = {
      id: Date.now(),
      name: name,
      email: email,
    };

    setUser(newUSer);
    localStorage.setItem("user", JSON.stringify(newUSer));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
