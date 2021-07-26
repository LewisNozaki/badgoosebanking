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
  setIsUser,
  balance,
  setBalance,
  userName,
  setUserName,
  updateBalance,
  setUserStatus,
  logout,
  getUsername
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
          </Link> }
          <Link to="/AllData/">
            All Data
          </Link>
        </div>
      </div>

        <div className="route-path">
          <Route path="/" exact
            component={() => <Home isUser={isUser} 
            userName={userName}
            logout={logout}
            currentBalance={balance} />}
          />
          <Route path="/Login/" 
            component={() => <Login userStatus={setUserStatus} 
            setUserName={setUserName}
            setBalance={setBalance}
            getUsername={getUsername}
            />}
          />
          <Route path="/CreateAccount/" 
            component={() => <CreateAccount userStatus={setUserStatus} 
            setUserName={setUserName}
            isUser={isUser} />}
          />
          <Route path="/Deposit/"
            component={() => <Deposit currentBalance={balance}
            updateBalance={updateBalance} />}
          />
          <Route path="/Withdraw/"      
            component={() => <Withdraw currentBalance={balance}
            updateBalance={updateBalance} />}
          />
          <Route path="/AllData/" 
            component={AllData}
          />
        </div>
    </HashRouter>
  )
}

export default Navbar;