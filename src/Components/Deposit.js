import React, { useState, useContext } from 'react';
import { Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Deposit.css';
import DataContext from '../Context/data-context';

function Deposit({ balance }) {
  const [deposit, setDeposit] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const ctx = useContext(DataContext);
  
  let status = `Account Balance $ ${balance}`;
  
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

    ctx.updateCtxBalance(deposit, "ADD");
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