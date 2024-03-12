import { Grid,Button,Typography } from '@mui/material';
import Image from 'next/image';
import CountDown from './CounDown';

function Offer() {
  return (
    <Grid container width={'100vw'} bgcolor={'black'} sx={{background: 'url(/offerBg.png)', height: {xs: '100vh', md: '70vh'}}}>
        <Grid item xs={12} md={6} sx={{height: {xs: '50%', md: '100%'}}} textAlign={'center'} display={'flex'} direction={'column'} justifyContent={'center'} alignItems={'center'} color={'white'} p={2}>
            <Typography variant='h2'>Delious Burgers And French Fries</Typography>
            <Typography>Progressively simplify effective e-tailers and process centric methods
                of empowerment. Quickly pontificate parallel.
            </Typography>
            <CountDown style={{fontSize: 'xx-large'}}/>
            <Button variant="contained" sx={{ bgcolor: '#f95959', mt: '12px' , ":hover": {bgcolor:'#f9ecec',color: '#f95959'}}} size='small'>Order Now</Button>
        </Grid>
        <Grid item xs={12} md={6} position='relative' sx={{height: {xs: '50%', md: '100%'}}}>
                <Image src='/offerProduct.png' alt='offer' layout='fill' objectFit='contain'/>
        </Grid>
    </Grid>
  )
}

export default Offer;