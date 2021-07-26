import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import "./App.css";

function App() {
  const [balance, setBalance] = useState(0);
  const [isUser, setIsUser] = useState(false);
  const [userName, setUserName] = useState("");

  const updateBalance = (num, calc) => {
    if (calc === "ADD") {
      setBalance(prevBal => parseInt(prevBal) + parseInt(num));
    } else if(calc === "MINUS"){
      setBalance(prevBal => parseInt(prevBal) - parseInt(num));
    }
  };

  const setUserStatus = () => {
    setIsUser(true);
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
      />
    </div>
  );
}

export default App;
