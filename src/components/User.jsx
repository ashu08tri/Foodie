"use client"
import Link from 'next/link';
import { Typography } from '@mui/material'
import { signOut, useSession } from "next-auth/react"


function User() {
  const { status } = useSession();

  return (
    <>
      {status === 'authenticated' ? <>
        <Link href='/order' style={{color: "#f95959"}}><Typography>ORDERS</Typography></Link>
        <span onClick={() => signOut()} style={{color: "#f95959", cursor: 'pointer'}}><Typography>LOGOUT</Typography></span>
      </> : <Link href='/login' style={{color: "#f95959"}}><Typography>LOGIN</Typography></Link>}
    </>
  )
}

export default User;