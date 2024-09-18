import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../reduxwork/UserSlice'
import MyModal from './MyModal'



const Profile = () => {

  const { userData } = useSelector((state) => state.user)
  const dispatcher = useDispatch()

  const [showModal, setshowModal] = useState(false)

  const handelsShow = () => {
    setshowModal(true)
  }

  const handelsHide = () => {
    setshowModal(false)
  }

  return (
    <div>

      <h1>{userData.name}</h1>
      <h1>{userData.email}</h1>
      <h1>{userData.mobileNo}</h1>

      <button onClick={() => {
        dispatcher(logout())
        handelsShow()
      }}>LOGOUT</button>

      <MyModal isShow={showModal} onClose={handelsHide} message="Do Logiut?"></MyModal>

    </div>
  )
}

export default Profile