import React, { useState, useContext, useEffect } from 'react';
import { Form, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';
import DataContext from '../Context/data-context';

const Login = ({ updateUserStatus, getUsername }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [validLogin, setValidLogin] = useState(false);
  
  const ctx = useContext(DataContext);

  const history = useHistory();

  useEffect(() => {
    for (let i = 0; i < ctx.users.length; i++) {
      if (ctx.users[i].email === username && ctx.users[i].password === password) {
        setValidLogin(true);
      }
    }
  }, [username, password, ctx.users])

  const usernameInput = (e) => {
    setUsername(e.target.value);
    setIsValid(true);
  }
  
  const passwordInput = (e) => {
    setPassword(e.target.value);
    setIsValid(true);
  }

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === '') {
      alert('Error: Username is required.');
      return;
    }

    if (password === '') {
      alert('Error: Password is required.');
      return;
    }

    if (validLogin === true) {
      updateUserStatus();
      ctx.updateCurrUser(username);
      alert('Welcome back!');
      history.push('/');
    } else {
      alert('Invalid email or password');
      setUsername('');
      setPassword('');
    }
  }

  return (
    <Card>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="email-input-container">
          <label className="name-label">Username</label>
          <input
            type="email" 
            value={username}
            onChange={usernameInput}
            placeholder="Enter username" 
            className="email-input"
            autoComplete="off"
          />
            <Form.Text className="email-text">
              Username was the email used upon creating account.
            </Form.Text>
        </div>

        <div className="password-input-container">
          <label className="name-label">Password</label>
          <input
            type="password" 
            value={password}
            onChange={passwordInput}
            placeholder="Password" 
            className="password-input"
            autoComplete="off"
          />
        </div>
        <button type='submit' disabled={!isValid}>
          Log in
        </button>
      </form>

    </Card>

  )
}

export default Login;