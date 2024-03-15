"use client"
import { useState, useEffect } from "react";
import { Box, Button, IconButton, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import{useDispatch} from 'react-redux';
import { increment } from "@/utils/cartValue";


function Price({ price, id, options,title,img }) {

  const {status} = useSession();

  let session = false; 

  if(status === 'authenticated'){
    session = true;
  }

  const dispatch = useDispatch();
  const route = useRouter()
  const [total, setTotal] = useState(price);
  const [selected, setSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setTotal(quantity * (options ? price + options[selected].additionalPrice : price))
  }, [quantity, selected, options, price])

  const quantiyIncreasement = () => {
    setQuantity(prev => prev + 1)
  }

  const quantiyDecreasement = () => {
    setQuantity(prev => prev - 1)
  }


  const cartHandler = async () => {

    if(session){
    let cartData = {
      id,
      title,
      price: total,
      img,
      quantity,      
      options: options[selected].title
    }
        let res = await fetch('https://foodie-resturant.vercel.app/api/cart',{
        method: 'Post',
        body: JSON.stringify(cartData)
      })
      res = await res.json();
      if(res.success){
        dispatch(increment());
        route.push('/cart');
        route.refresh();
      }
    }else{
      alert('Login to add items in cart!')
    }
  }

  return (
    <Box>
      <Typography variant='h4' py={1}>&#8377; {total}</Typography>
      {options.map((item, i) => <Button key={i} variant={selected === i ? 'contained' : 'outlined'} color="error"
        sx={{ mr: '10px' }}
        size='small' onClick={() => setSelected(i)}>
        {item.title}
      </Button>)}

      <Box display={'flex'} sx={{flexDirection: {xs: 'column', md: 'row'}}} my={2} gap={1}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} sx={{ width: { xs: '100%', md: '40%' }, border: '1px solid #f95959'}}>
          <Typography pl={1}>Quantity:</Typography>
          <Box display={'flex'} alignItems={'center'}>
            <IconButton onClick={quantiyDecreasement} disabled={quantity === 1 ? true : false} sx={{ color: '#f95959' }} >
              <KeyboardArrowLeftIcon />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton onClick={quantiyIncreasement} sx={{ color: '#f95959' }}>
              <KeyboardArrowRightIcon />
            </IconButton>
          </Box>
        </Box>
        <Button variant="contained" sx={{ bgcolor: '#f95959', borderRadius: '0',boxShadow: 'none' ,":hover": {bgcolor:'#f9ecec',color: '#f95959'}}} onClick={cartHandler}>Add to cart</Button>
      </Box>

    </Box>
  )
}

export default Price;
