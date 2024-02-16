import useSelection from 'antd/es/table/hooks/useSelection'
import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/user';
import { useRouter } from 'next/router'

export default function Logout() {

  const user = useSelector(((state) => state.user.value))

  const handleClick = () => {
    dispatch(logout())
    router.push("/home")
  }
  
  return (
    <>
      <div>
        {user.firstname}
      </div>
      <div>
        {user.lastname}
      </div>
      <button onClick={() => handleClick()}></button>
    </>
  )
}
