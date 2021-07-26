import React, { useState, createContext } from 'react';

const DataContext = createContext({
  saveUserInfo: () => {},
  users: []
});

export const DataContextProvider = ({ children }) => {
  const [userList, setUserList] = useState([]);

  const saveUserHandler = (name, email, password, balance) => {
    let newUser = {
      "name": name,
      "email": email,
      "password": password,
      "balance": balance
    };
    setUserList(prevState => [...prevState, newUser]);
  }

  let myValue = {
    saveUserInfo: saveUserHandler,
    users: userList
  }

  return (
    <DataContext.Provider
      value={myValue}
    >
      {children}
    </DataContext.Provider>
  )
}

export default DataContext;