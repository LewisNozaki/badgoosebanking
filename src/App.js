import React, { useState, useContext, useEffect } from 'react';
import Navbar from './Components/Navbar';
import "./App.css";
import DataContext from './Context/data-context';

function App() {
  const [balance, setBalance] = useState(0);
  const [isUser, setIsUser] = useState(false);
  const [userName, setUserName] = useState("");
  
  const ctx = useContext(DataContext);

  useEffect(() => {
    for (let i = 0; i < ctx.users.length; i++) {
      if (ctx.users[i].email === userName) {
        setBalance(ctx.users[i].balance);
      }
    }
  }, [userName, ctx.users])

  const updateBalance = (num, calc) => {
    if (calc === "ADD") {
      setBalance(prevBal => parseInt(prevBal) + parseInt(num));
      ctx.updateCtxBalance(parseInt(balance) + parseInt(num), userName);
    } else if(calc === "MINUS") {
      setBalance(prevBal => parseInt(prevBal) - parseInt(num));
      ctx.updateCtxBalance(parseInt(balance) - parseInt(num), userName);
    }
  };
  
  const updateUserStatus = () => {
    setIsUser(true);
  }

  const logout = () => {
    setBalance(0);
    setUserName('');
    setIsUser(false);
  }

  const getUsername = (name) => {
    console.log(name);
    setUserName(name);
  }
  
  return (
    <div className="App">
      <Navbar 
        isUser={isUser} 
        setIsUser={setIsUser}
        balance={balance}
        setBalance={setBalance}
        userName={userName}
        setUserName={setUserName}
        updateBalance={updateBalance}
        setUserStatus={updateUserStatus}
        logout={logout}
        getUsername={getUsername}
      />
    </div>
  );
}

export default App;
