import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const initialValue = { email: "", password: "", rememberMe: false, selected: "None", range: 0 }
  const [formValues, setFormValues] = useState(initialValue)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }



  const converttoDefEventPara = (name, value) => ({
    target: {
      name, value
    }
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues)

  }


  return (
    <div className="mainContainer"  >

      <form
        className='FormContainer'
        onSubmit={handleSubmit} >
        <h2>Login Form</h2>
        <input placeholder='Email' onChange={handleChange} value={formValues.email} name="email" />
        <input placeholder='Password' type="password" onChange={handleChange} value={formValues.password} name="password" />
        <input type="range" min="0" max="100" onChange={handleChange} value={formValues.range} name="range" />
        <input type="checkbox" onChange={e => handleChange(converttoDefEventPara(e.target.name, e.target.checked))} name="rememberMe" checked={formValues.rememberMe} ></input>

        <select value={formValues.selected} name="selected" onChange={handleChange}>
          <option value={formValues.selected}>None</option>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>


        <button type='submit' >login</button>
      </form>
    </div >
  );
}

export default App;
