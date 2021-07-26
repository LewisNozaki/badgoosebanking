import React from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllData from './AllData';
import Logo from '../Components/bankLogo.png';
import "./Navbar.css";

const Navbar = ({
  isUser,
  username,
  updateUserStatus,
  logout,
  balance
  }) => {
  
  return (
    <HashRouter>
      <div className="nav-bar">

        <div className="logo-container">
          <img src={Logo} className="bank-logo" alt="banking logo" />
          <h1 className="bank-title">
            Goose Banking
          </h1>
        </div>
        
        <div className="links-container">
          <Link to="/">
            Home
          </Link>
          {!isUser && <Link to="/Login/">
            Login
          </Link>}
          {!isUser && <Link to="/CreateAccount/">
            Create Account
          </Link>}
          {isUser && <Link to="/Deposit/">
            Deposit
          </Link>}
          {isUser && <Link to="/Withdraw/">
            Withdraw
          </Link>}
          <Link to="/AllData/">
            All Data
          </Link>
        </div>
      </div>

      <div className="route-path">
        <Route path="/" exact
          component={() => 
            <Home 
              isUser={isUser} 
              username={username}
              logout={logout}
              balance={balance} 
            />}
        />
        <Route path="/Login/" 
          component={() => 
            <Login 
              updateUserStatus={updateUserStatus}
          />}
        />
        <Route path="/CreateAccount/" 
          component={() => 
            <CreateAccount 
              updateUserStatus={updateUserStatus} 
              isUser={isUser} 
            />}
        />
        <Route path="/Deposit/"
          component={() => 
            <Deposit 
              balance={balance}
            />}
        />
        <Route path="/Withdraw/"      
          component={() => 
            <Withdraw 
              balance={balance}
            />}
        />
        <Route path="/AllData/" 
          component={AllData}
        />
      </div>
    </HashRouter>
  )
}

export default Navbar;