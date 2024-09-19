import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../reduxwork/UserSlice';


const Login = () => {
  const navigate = useNavigate();

  const dispatcher = useDispatch();

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>UerName</label>
          <input type="text" id='username' name='username' required />
        </div>
        <div>
          <label>Password</label>
          <input type="text" id='password' name='password' required />
        </div>
        <button onClick={()=>{
          dispatcher(login({}))
          navigate("/all");
        }}>Login</button>
      </form>
      <p
        onClick={() => {
          navigate("/registration");
        }}
      >
        Dont have account Register
      </p>
    </div>
  )
}

export default Login