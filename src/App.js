import React, { useState, useContext } from 'react';
import Navbar from './Components/Navbar';
import "./App.css";
import DataContext from './Context/data-context';

function App() {
  const [balance, setBalance] = useState(0);
  const [isUser, setIsUser] = useState(false);
  const [userName, setUserName] = useState("");

  const ctx = useContext(DataContext);

  const updateBalance = (num, calc) => {
    if (calc === "ADD") {
      // setBalance(prevBal => parseInt(prevBal) + parseInt(num));
      ctx.updateCtxBalance(setBalance(prevBal => parseInt(prevBal) + parseInt(num)));
    } else if(calc === "MINUS"){
      // setBalance(prevBal => parseInt(prevBal) - parseInt(num));
      ctx.updateCtxBalance(setBalance(prevBal => parseInt(prevBal) - parseInt(num)));
    }

    // ctx.updateCtxBalance(balance);
  };

  const setUserStatus = () => {
    setIsUser(true);
  }

  const logout = () => {
    console.log("logging out");
    setBalance(0);
    setUserName('');
    setIsUser(false);
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
        setUserStatus={setUserStatus}
        logout={logout}
      />
    </div>
  );
}

export default App;
