import React, { useState } from 'react'
// import "./registration.css"
import { useNavigate } from 'react-router-dom';
import { registration } from '../reduxwork/UserSlice';
import { useDispatch } from 'react-redux';


const Registration = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [mobileNo, setmobileNo] = useState("")

  const dispatcher = useDispatch()

  const doRegister = () => {

    let userData = {
      name,
      email,
      password,
      mobileNo
    }
    dispatcher(registration(userData))

  }

  return (
    <>
      <div className="Regi-container">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" id="name"
              onChange={(e) => setname(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input type="emaill" id="email" name="email"
              onChange={(e) => setemail(e.target.value)}
              required />
          </div>
          <div className="form-group">
            <label>PassWord</label>
            <input type="text" id="password"
              onChange={(e) => setpassword(e.target.value)}
              required />
          </div>
          <div className="form-group">
            <label>Mobile No</label>
            <input type="text" id="monile no"
              onChange={(e) => setmobileNo(e.target.value)} />
          </div>
          <button onClick={() => doRegister()} className="submit-btn">
            Registration
          </button>

          <p
            onClick={() => {
              navigate("/login");
            }}
          >
            Already Rehister? Login
          </p>
        </form>
      </div>
    </>
  )
}

export default Registration