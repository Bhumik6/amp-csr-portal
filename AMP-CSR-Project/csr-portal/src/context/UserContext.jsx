import React, { createContext, useState, useEffect } from "react";
import usersData from "../mock/users.json";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    setUsers(usersData);
  }, []);

  const updateUser = (id, updatedInfo) => {
    const updatedUsers = users.map(user =>
      user.id === id ? { ...user, ...updatedInfo } : user
    );
    setUsers(updatedUsers);
  };

  return (
    <UserContext.Provider value={{ users, setUsers, selectedUser, setSelectedUser, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
