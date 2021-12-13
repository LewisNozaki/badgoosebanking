import React, { useState, createContext } from 'react';

const DataContext = createContext({
  saveUserInfo: () => {},
  users: [],
  updateCtxBalance: () => {},
  currentUser: {},
  updateCurrUser: () => {}
});

export const DataContextProvider = ({ children }) => {
  const [userList, setUserList] = useState([{      
    "name": 'Ivy Nozaki',
    "email": 'ivy@gb.com',
    "password": 'gb',
    "balance": 100
  }]);
  const [currUser, setCurrUser] = useState("");
  
  const saveUserHandler = (name, email, password, balance) => {
    let newUser = {
      "name": name,
      "email": email,
      "password": password,
      "balance": balance
    };

    setUserList(prevState => [...prevState, newUser]);
    setCurrUser(newUser);
  }

  const updateCtxBalance = (num, calc) => {
    let newBal = 0;
    
    if (calc === "ADD") {
      setUserList(prevState => {
        for (let i = 0; i < prevState.length; i++) {
          if (prevState[i].email === currUser.email) {
            newBal = parseInt(prevState[i].balance) + parseInt(num);
            prevState[i].balance = newBal
          }
        }
        return prevState;
      })
    } else if(calc === "MINUS") {
      setUserList(prevState => {
        for (let i = 0; i < prevState.length; i++) {
          if (prevState[i].email === currUser.email) {
            newBal = parseInt(prevState[i].balance) - parseInt(num)
            prevState[i].balance = newBal
          }
        }
        return prevState;
      })
    }
    
    setCurrUser(prevState => {
      return {...prevState, "balance":newBal}
    })
  }

  const updateCurrUser = (username) => {
    let loggedInUser = userList.filter(user => user.email === username)[0];

    setCurrUser(loggedInUser);
  }

  let myValue = {
    saveUserInfo: saveUserHandler,
    users: userList,
    updateCtxBalance: updateCtxBalance,
    currentUser: currUser,
    updateCurrUser: updateCurrUser
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