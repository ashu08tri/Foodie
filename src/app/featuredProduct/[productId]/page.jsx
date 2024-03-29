import {Grid,Typography,Box} from '@mui/material';
import Image from 'next/image';
import Price from '@/components/Price';

const getData = async (id) => {
  let res = await fetch(`${process.env.API_URL}/api/featured/` + id)
  try{
    res = await res.json();
    return res.result; 
  }catch(e){
    console.log(e);
    return null;
  }
}

async function FeaturedProductDetail({params}) {
  const singleProduct = await getData(params.productId)
  return (
    <Grid container height={'95vh'} justifyContent={'center'} alignItems={'center'} width={'100vw'}>
      <Grid item xs={12} md={6} position='relative' sx={{height: {xs:'36%', md: '50%'}}}>
          <Image
            src={singleProduct[0].img}
            fill
            objectFit='contain'
            alt='singleProduct'
          />
      </Grid>
      <Grid item xs={12} md={6} height={'50%'}> 
      <Box sx={{textAlign: {xs: 'center', md: 'left'}}} px={2} color={'#f95959'}>
        <Typography variant='h1' sx={{fontSize:{xs: '48px', md: '90px'}}}>{singleProduct[0].title}</Typography>
        <Typography pr={5}>{singleProduct[0].desc}</Typography>
        <Price price={singleProduct[0].price} id={singleProduct[0].id} options={singleProduct[0].options} img={singleProduct[0].img} title={singleProduct[0].title}/>
        </Box>
      </Grid>
    </Grid>
  )
}

export default FeaturedProductDetail;
