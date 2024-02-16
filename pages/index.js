import React from 'react'

import Link from 'next/link';


export default function index() {
  return (
    <>
        <Login/>
        <Link href="/home">Go to home page</Link>
    </>
  )
}