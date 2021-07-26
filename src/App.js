import React, { useState, useContext, useEffect } from 'react';
import Navbar from './Components/Navbar';
import "./App.css";
import DataContext from './Context/data-context';

function App() {
  const [balance, setBalance] = useState(0);
  const [isUser, setIsUser] = useState(false);
  const [username, setUsername] = useState("");
  
  const ctx = useContext(DataContext);
  
  useEffect(() => {
    setUsername(ctx.currentUser.name);
    setBalance(ctx.currentUser.balance);
  }, [ctx.currentUser])

  const updateUserStatus = () => {
    setIsUser(true);
  }

  const getUsername = (name) => {
    setUsername(name);
  }

  const logout = () => {
    setBalance(0);
    setUsername('');
    setIsUser(false);
  }
  
  return (
    <div className="App">
      <Navbar
        isUser={isUser}
        username={username}
        balance={balance}
        getUsername={getUsername}
        updateUserStatus={updateUserStatus}
        logout={logout}
      />
    </div>
  );
}

export default App;
