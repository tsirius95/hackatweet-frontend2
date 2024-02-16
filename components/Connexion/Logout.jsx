import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../reducers/user';
const { useRouter } = require('next/router');
import styles from '../../styles/DesignSystem.module.css'

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
    <div className={styles.logout}>
      <div class={styles.userInfos}>
        {firstname} @{lastname}
      </div>
      <button className={styles.btnTertiary} onClick={() => handleClick()}>Logout</button>
    </div>
  )
}
