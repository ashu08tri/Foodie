import { Box,Button, Grid, Typography, Card, CardContent } from '@mui/material';
import Image from 'next/image';
import Swipe from './Swipe';

async function getData(){
    try{
        let res = await fetch(`${process.env.NEXTAUTH_URL}/api/featured`);
        if(res.ok){
            res = await res.json();
            return res.result; 
        }
    }catch(e){
        console.log(e);
        return null
    }
   
  }



async function Featured() {

    const featuredProducts = await getData()

    return (
        
        <Grid container sx={{width: '100vw', overflowX: 'scroll', '::-webkit-scrollbar': {display: 'none'}}}>
            <Grid item width={'max'} display={'flex'} position={'relative'}>
            <Swipe />
                {featuredProducts && featuredProducts.map((item,i) =>  
                <Card key={i} sx={{ ':hover': {background: '#f9ecec', transition: 'all 0.3s'}}}>
                    
                    <Box sx={{width: {xs: '100vw', md: '50vw', ls: '33vw'}, height: {xs: '60vh', md: '75vh'}}} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} pt={1}>
                    <Box sx={{position:'relative', flex:1, width: '300px', ':hover': {rotate: '60deg'}, transition: 'all 0.5s'}}>
                        <Image src={item.img} layout='fill' objectFit='contain' alt='hearder'/>
                    </Box>
                    <CardContent sx={{textAlign: 'center', color:'#f95959' }}>
                        <Typography variant='h3' py={1}>
                           {item.title}
                        </Typography>
                        <Typography py={1} mx={8}>
                           {item.desc}
                        </Typography>
                        <Typography variant='span' py={1} fontSize={'25px'} fontWeight={'bold'} display={'block'}>
                        &#8377;{item.price}
                        </Typography>
                        <Button variant="contained" sx={{ bgcolor: '#f95959', margin: '10px 0' ,":hover": {bgcolor:'#f9ecec',color: '#f95959'}}} size='small'>ORDER NOW</Button>
                    </CardContent>
                    </Box>
                </Card>)}
               
            </Grid>
        </Grid>
       
    )
}

export default Featured
