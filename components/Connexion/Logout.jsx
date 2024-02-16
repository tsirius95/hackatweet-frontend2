import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/user';
const { useRouter } = require('next/router');

export default function Logout() {
  const router = useRouter()
  const dispatch = useDispatch()
  
  const firstname = useSelector(((state) => state.user.value.firstname))
  const lastname = useSelector(((state) => state.user.value.lastname))

  const handleClick = () => {
    dispatch(logout())
    router.push("/")
  }
  
  return (
    <>
      <div>
        {firstname}
      </div>
      <div>
        {lastname}
      </div>
      <button onClick={() => handleClick()}>LOGOUT</button>
    </>
  )
}
