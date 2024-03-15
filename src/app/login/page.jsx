"use client"
import { Grid, Box,Button, Card, CardContent, Typography } from '@mui/material';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Loading from './Loading';
import Link from 'next/link';

function Login() {
  const {status} = useSession();
  const route = useRouter();

  if(status === 'loading'){
    return <Loading />
  }
  if(status === 'authenticated'){
    route.push('/')
  }
 
  return (
    <Grid container height={'100vh'} display={'flex'} justifyContent={'center'} alignContent={'center'} >
      <Grid item xs={12} md={4} sx={{height: {xs: '35%', md: '70%'}}}>
        <Box position={'relative'} height={"100%"}>
        <Image
          src='/loginBg.png'
          layout='fill'
          objectFit='cover'
          alt='login'
        />
        </Box>
      </Grid>

      <Grid item xs={12} md={4} sx={{height: {xs: '65%', md: '70%'}}}>
        <Card sx={{height: '100%', textAlign: 'center' , display: 'flex', alignItems: 'center'}}>
          <CardContent>
            <Typography variant='h1'>Welcome</Typography>
            <Typography>Log into your account or create a new one using the socail buttons!</Typography>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Button variant='outlined' sx={{ display: 'block', my: '10px', width: '80%', display: 'flex', justifyContent: 'space-evenly' }} onClick={() => signIn('google')}>
              <Image src='/google.png' width={20} height={20} alt='google' />
              <span>sign in with Google</span>
            </Button>
            <Button variant='outlined' sx={{ display: 'block', my: '10px', width: '80%', display: 'flex', justifyContent: 'space-evenly' }} onClick={() => signIn('facebook')}>
              <Image src='/facebook.png' width={20} height={20} alt='facebook' />
              <span>Sign in with Facebook</span>
            </Button>
            </Box>
           <Typography>Having a problem?<Link href='/contact'>Contact Us!</Link></Typography>
          </CardContent>
        </Card>

      </Grid>
    </Grid>
  )
}

export default Login;
