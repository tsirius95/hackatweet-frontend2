import React from 'react'

import Link from 'next/link';
import Login from '../components/Connexion/Login';


export default function index() {
  return (
    <div>
        <Login/>
        <Link href="/home">Go to home page</Link>
        <Link href="/hashtag">Go to hashtag page</Link>
    </>
  )
}