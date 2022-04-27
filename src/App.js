import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [Email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [checked, setChecked] = useState(false)
  const [calender, setCalender] = useState("")
  const [selected, setSelected] = useState("")
  const [range, setRange] = useState(0)


  const data = {
    email_Data: Email,
    Password_Data: password,
    Checked_Data: checked,
    Calender_Data: calender,
    selected_Data: selected,
    Range_Data: range

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data)

  }


  return (
    <div className="mainContainer"  >

      <form
        className='FormContainer'
        onSubmit={handleSubmit} >
        <h2>Login Form</h2>
        <input placeholder='Email' onChange={e => setEmail(e.target.value)} value={Email} />
        <input placeholder='Password' type="password" onChange={e => setPassword(e.target.value)} value={password} />
        <input type="month" onChange={e => setCalender(e.target.value)} />
        <input type="range" onChange={e => setRange(e.target.value)} min="0" max="100" />


        <select value={selected} onChange={e => setSelected(e.target.value)}>
          <option value="None">None</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
        <input type="checkbox" onChange={(e) => setChecked(!checked)} />

        <button type='submit' >login</button>
      </form>
    </div>
  );
}

export default App;
