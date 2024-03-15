"use client"
import Link from 'next/link';
import { Typography } from '@mui/material';
import { signOut, useSession } from "next-auth/react";
import { redirect } from 'next/navigation';


function User() {
  const { status } = useSession();

   const logOut = () => {
    redirect('/')
    signOut();
  }

  return (
    <>
      {status === 'authenticated' ? <>
        <Link href='/order' style={{color: "#f95959"}}><Typography>ORDERS</Typography></Link>
        <span onClick={logOut} style={{color: "#f95959", cursor: 'pointer'}}><Typography>LOGOUT</Typography></span>
      </> : <Link href='/login' style={{color: "#f95959"}}><Typography>LOGIN</Typography></Link>}
    </>
  )
}

export default User;
