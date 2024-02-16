import React from 'react'

import Link from 'next/link';
import Login from '../components/Connexion/Login';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';


export default function index() {
  const router = useRouter()
  const user = useSelector((state) => state.user.value)
  if (user.token !== null) {
    router.push("/home")
  } else {
    return (
      <>
          <Login/>
      </>
    )
  }

}