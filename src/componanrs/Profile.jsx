import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reduxwork/UserSlice'


const Profile = () => {

  const { userData } = useSelector((state) => state.user)
  const dispatcher = useDispatch()

  return (
    <div>

      <h1>{userData.name}</h1>
      <h1>{userData.email}</h1>
      <h1>{userData.mobileNo}</h1>

      <button onClick={() => dispatcher(logout())}>LOGOUT</button>
    </div>
  )
}

export default Profile