"use client"
import { useQuery } from "@tanstack/react-query";
import { Box, Grid, Typography, Card, CardContent } from "@mui/material";
import Image from "next/image";
import DeleteButton from "@/components/DeleteButton";
import CartButton from "@/components/CartButton";
import { useSession } from "next-auth/react";


function Cart() {

  const{data,isPending} = useQuery({
    queryKey: ['cart'],
    queryFn: async () => {
        let res = await fetch('https://foodie-resturant.vercel.app/api/cart');
        res = await res.json();
        return res.result;
      }
    
  })

  const { status } = useSession();

  let session = false;
  let sum = 0;

  if(status == 'authenticated'){
    session = true;
  }

  let totalPrice;
  let product;
  let id;
  let cartData = []
  if (data) {
    cartData = [...data]
    totalPrice = cartData.map(item => item.price);
    product = cartData.map(item => item.title);
    id = cartData.map(item => item._id);

    for (let i = 0; i < totalPrice.length; i++) {
      sum += totalPrice[i]
    }
  }if(isPending){
    <p>Loading...</p>
  }




  return (
    <Grid container height={'84vh'}>
      {session && cartData.length>0 ? <>
        <Grid item xs={12} md={8} sx={{
          height: { xs: '50%', md: '98%' }
          , overflowY: 'scroll', '::-webkit-scrollbar': { display: 'none' }, mt: '10px', justifyContent: { xs: 'flex-start', md: 'center' }
        }}
          display={'flex'} direction={'column'}
        >
          <Box sx={{ ":first-of-type": { paddingTop: { md: '70px' } } }}>

            {cartData.map((item, i) => <Card sx={{ boxShadow: 'none', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }} key={i}>
              <Image
                src={item.img}
                width={100}
                height={100}
                layout="relative"
                alt="cart_product"
              />
              <CardContent sx={{ width: '40%', color: '#f95959' }}>
                <Typography variant="h2">{item.title}</Typography>
                <Box display={'flex'} justifyContent={'space-between'}>
                  <Typography variant="h5">{item.options}</Typography>
                  <Typography variant="h5"> &#8377;{item.price}</Typography>
                </Box>

              </CardContent>
              <DeleteButton id={item._id} />
            </Card>)}

          </Box>

        </Grid>


        <Grid item xs={12} md={4} textAlign={'center'} bgcolor={'#f9ecec'} color={'#f95959'} sx={{ height: { xs: '48%', md: '100%' } }} display={'flex'} justifyContent={'center'} direction={'column'} gap={2}>
          <Box display={'flex'} justifyContent={'space-evenly'}>
            <Typography>Subtotal ({cartData.length > 1 ? cartData.length + 'Items' : cartData.length + 'Item'})</Typography>
            <Typography>&#8377; {sum}</Typography>
          </Box>
          <Box display={'flex'} justifyContent={'space-evenly'}>
            <Typography>Service Cost</Typography>
            <Typography>&#8377; 0.0</Typography>
          </Box>
          <Box display={'flex'} justifyContent={'space-evenly'}>
            <Typography>Delivery Cost</Typography>
            <Typography color={'#54de10'}>Free!</Typography>
          </Box>
          <hr />
          <Box display={'flex'} justifyContent={'space-evenly'}>
            <Typography>Total (Including GST)</Typography>
            <Typography fontWeight={'bold'}>&#8377; {sum}</Typography>
          </Box>
          <Box display={'flex'} justifyContent={'end'} width={'85%'}>
            <CartButton product={product} price={sum} id={id} />
          </Box>

        </Grid></> : <Grid item xs={12} display={'flex'} alignItems={'center'} justifyContent={'center'}><Typography variant="h3" color='#f95959'>{session ? 'Cart is Empty!' : 'Login to add items'}</Typography></Grid>}

    </Grid>
  )
}

export default Cart;
