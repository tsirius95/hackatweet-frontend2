import React from 'react'

import Link from 'next/link';

// IMPORT COMPONENT //
import Login from '../components/Connexion/Login';

export default function index() {
  return (
    <>
        <Login/>
        <Link href="/home">Go to home page</Link>
    </>
  )
}