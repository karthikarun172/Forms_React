import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useForm from './CustomHooks/useForm';

function App() {

  const initialValue = { email: "", password: "", rememberMe: false, selected: "None", range: 0 }



  const { formValues, setFormValues, handleChange, errors, setErrors } = useForm(initialValue)

  const validate = () => {
    let temp = {}
    temp.email = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(formValues.email) ? "" : "this field is required"
    temp.password = formValues.password ? "" : "password required"
    temp.range = formValues.range > 20 ? "" : "range should be greater than 20"
    setErrors({ ...temp })
    return Object.values(temp).every(x => x == "")
  }




  const converttoDefEventPara = (name, value) => ({
    target: {
      name, value
    }
  })


  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log(formValues)
    }

  }


  return (
    <div className="mainContainer"  >

      <form
        className='FormContainer'
        onSubmit={handleSubmit} >
        <h2>Login Form</h2>
        <input placeholder='Email' onChange={handleChange} value={formValues.email} name="email" />
        {errors ? <p>{errors.email}</p> : null}
        <input placeholder='Password' type="password" onChange={handleChange} value={formValues.password} name="password" />
        {errors ? <p>{errors.password}</p> : null}
        <input type="range" min="0" max="100" onChange={handleChange} value={formValues.range} name="range" />
        {errors ? <p>{errors.range}</p> : null}
        <input type="checkbox" onChange={e => handleChange(converttoDefEventPara(e.target.name, e.target.checked))} name="rememberMe" checked={formValues.rememberMe} ></input>

        <select value={formValues.selected} name="selected" onChange={handleChange}>
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
