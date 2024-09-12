import React from 'react'
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <form action="#">
        <div>
          <label>UerName</label>
          <input type="text" id='username' name='username' required />
        </div>
        <div>
          <label>Password</label>
          <input type="text" id='password' name='password' required />
        </div>
        <button>Login</button>
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