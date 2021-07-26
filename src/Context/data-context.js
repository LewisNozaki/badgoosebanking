import React, { useState, createContext } from 'react';

const DataContext = createContext({
  saveUserInfo: () => {},
  users: [],
  updateCtxBalance: () => {},
});

export const DataContextProvider = ({ children }) => {
  const [userList, setUserList] = useState([{      
    "name": 'Ivy Nozaki',
    "email": 'ivy@goosebanking.com',
    "password": 'geeseftw',
    "balance": 500
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

  const updateCtxBalance = (bal) => {
    console.log(bal);
    // let updatedUser = {...userList[0], "balance": bal}
    // setUserList([updatedUser]);
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