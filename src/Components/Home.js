import React from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import { Link } from 'react-router-dom';

function Home ( props ) {
  const handleLogout = () => {
    props.logout();
  }
  
  return (
    <>
      {!props.isUser && <Card className="homepage">
        <h1>Welcome to Goose Banking</h1>
        <h2>Here at Goose Banking, we take your money as seriously as geese take on their territory. We offer a wide array of banking services for every  need along with 24/7 customer service. Your growth is our growth so join our flock today!</h2>

        <Link to="/CreateAccount/">
          <button>
            Join The Flock
          </button>
        </Link>

        <Link to="/Login/">
          <button>
            Login
          </button>
        </Link>
      </Card>}

      {props.isUser && <Card className="homepage user-home">
        <h1>Welcome {props.userName}!</h1>
        <h2>lorem ipsum </h2>

        <h3> Current Account Balance ${props.currentBalance}</h3>

        <Link to="/Deposit/">
          <button>
            Make Deposit
          </button>
        </Link>

        <Link to="/Withdraw/">
          <button>
            Make Withdrawal
          </button>
        </Link>

        <Link to="/CreateAccount/">
          <button>
            Add another account
          </button>
        </Link>

        <button onClick={handleLogout}>
            Logout
        </button>
      </Card>}
    </>
  );
}

export default Home;