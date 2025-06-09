import React, { createContext, useState, useContext, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (userData) => {
    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );

    const foundUser = registeredUsers.find(
      (u) => u.email === userData.email && u.password === userData.password
    );

    if (!foundUser) {
      throw new Error("Invalid email or password");
    }

    const userWithoutPassword = { ...foundUser };
    delete userWithoutPassword.password;

    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));

    if (JSON.parse(localStorage.getItem(user.email))) {
      return;
    }

    localStorage.setItem(
      userData.email,
      JSON.stringify([
        {
          name: "Liked Songs",
          songs: [],
        },
      ])
    );
  };

  const register = async (userData) => {
    const registeredUsers = JSON.parse(
      localStorage.getItem("registeredUsers") || "[]"
    );

    if (registeredUsers.some((user) => user.email === userData.email)) {
      throw new Error("Email already registered");
    }

    const newUser = {
      ...userData,
      id: Date.now(),
    };

    registeredUsers.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(registeredUsers));

    const userWithoutPassword = { ...newUser };
    delete userWithoutPassword.password;

    setUser(userWithoutPassword);
    localStorage.setItem("user", JSON.stringify(userWithoutPassword));

    localStorage.setItem(
      userData.email,
      JSON.stringify([
        {
          name: "Liked Songs",
          songs: [],
        },
      ])
    );
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const alreadyLogged = () => {
    setLoading(true);
    if (user) {
      setLoading(false);
      return true;
    }
    setLoading(false);
    return false;
  };

  const createPlayList = (libraries) => {
    setLoading(true);
    localStorage.setItem(user.email, JSON.stringify(libraries));
    setLoading(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, alreadyLogged, createPlayList }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
