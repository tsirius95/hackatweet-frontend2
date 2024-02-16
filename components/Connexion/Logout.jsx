import useSelection from 'antd/es/table/hooks/useSelection'
import React from 'react'
import { UseSelector, useDispatch } from 'react-redux';
import { logout } from '../../reducers/user';
import { useRouter } from 'next/router'

export default function Logout() {

  const firstname = useSelector((state) => state.firstname.value)
  const lastname = useSelector((state) => state.lastname.value)

  const handleClick = () => {
    dispatch(logout())
    router.push("/home")
  }
  
  return (
    <>
      <div>
        {firstname}
      </div>
      <div>
        {lastname}
      </div>
      <button onClick={() => handleClick()}></button>
    </>
  )
}
