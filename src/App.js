import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [Email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const data = {
    email_Data: Email,
    Password_Data: password
  }


  console.log("done");
  return (
    <div className="App">

      <form onSubmit={(e) => {
        e.preventDefault();
        console.log(data)
      }} >
        <h2>Login Form</h2>
        <input placeholder='Email' onChange={e => setEmail(e.target.value)}  ></input>
        <input placeholder='Password' type="password" onChange={e => setPassword(e.target.value)}  ></input>
        <button type='submit' >login</button>
      </form>
    </div>
  );
}

export default App;
