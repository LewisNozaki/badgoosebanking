import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Deposit.css';

function Deposit( props ) {
  const [deposit, setDeposit] = useState(0);
  const [isValid, setIsValid] = useState(false);
  
  let status = `Account Balance $ ${props.currentBalance}`;
  
  const handleChange = e => {
    setIsValid(true);
    setDeposit(e.target.value);
  };

  const handleSubmit = (e) => {
    if (isNaN(deposit)) {
      alert("Error: Not a number.");
      setDeposit(0);
      setIsValid(false);
      return;
    }

    if (deposit < 0) {
      alert("Error: Deposits must be made in positive quantities.");
      setDeposit(0);
      setIsValid(false);
      return;
    }

    props.updateBalance(deposit, "ADD");
    e.preventDefault();
  };

  return (
    <Card className="deposit">
      <h1>Make a Deposit</h1>
      <form onSubmit={handleSubmit}>
        <h2 id="total">{status}</h2>
         <input 
           type="text" 
           value={deposit}
           min="0"
           onChange={handleChange}/>
         <input 
          type="submit" 
          width="200" 
          disabled={!isValid}
          value="Submit"/>
      </form>
    </Card>
  );
}

export default Deposit;