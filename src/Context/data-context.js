import React, { useState, createContext } from 'react';

const DataContext = createContext({
  saveUserInfo: () => {},
  users: [],
  updateCtxBalance: () => {},
});

export const DataContextProvider = ({ children }) => {
  const [userList, setUserList] = useState([{      
    "name": 'Ivy Nozaki',
    "email": 'ivy@gb.com',
    "password": 'gb',
    "balance": 100
  }]);
  
  const saveUserHandler = (name, email, password, balance) => {
    let newUser = {
      "name": name,
      "email": email,
      "password": password,
      "balance": balance
    };
    
    setUserList(prevState => [...prevState, newUser]);
  }

  const updateCtxBalance = (bal, username) => {
    setUserList(prevState => {
      for (let i = 0; i < prevState.length; i++) {
        if (prevState[i].email === username) {
          prevState[i].balance = bal;
        }
      }

      return prevState;
    })
  }

  let myValue = {
    saveUserInfo: saveUserHandler,
    users: userList,
    updateCtxBalance: updateCtxBalance
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