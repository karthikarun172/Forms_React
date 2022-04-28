import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import useForm from './CustomHooks/useForm';

function App() {

  const initialValue = { email: "", password: "", rememberMe: false, selected: "None", range: 0 }




  const validate = (fieldValues = formValues) => {
    let temp = { ...errors }
    if ("email" in fieldValues)
      temp.email = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(fieldValues.email) ? "" : "this field is required"
    if ("password" in fieldValues)
      temp.password = fieldValues.password ? "" : "password required"
    if ("range" in fieldValues)
      temp.range = fieldValues.range > 20 ? "" : "range should be greater than 20"
    setErrors({ ...temp })

    if (fieldValues == formValues)
      return Object.values(temp).every(x => x == "")
  }


  const { formValues, setFormValues, handleChange, errors, setErrors } = useForm(initialValue, true, validate)


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
