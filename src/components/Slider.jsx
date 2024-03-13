"use client"
import {useState, useEffect} from 'react';
import {Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from 'next/navigation';



const data = [
  {
    id: 1,
    title: "always fresh & always crispy & always hot",
    image: "/slide1.png",
  },
  {
    id: 2,
    title: "we deliver your order at home",
    image: "/slide2.png",
  },
  {
    id: 3,
    title: "the best pizza to share with your family",
    image: "/slide3.jpg",
  },
];

export default  function Slider() {
 
  const [currentData,setCurrentData] = useState(0);

  const route = useRouter();

  useEffect(() => {
    const interval = setInterval(() => setCurrentData(prev => (prev === data.length-1 ? 0 : prev + 1)), 2000)

    return () => clearInterval(interval)
  },[])

  const clickHandler =() => [
    route.push('/menu/65d85c34849e2fd52dac3a4e')
  ]
  
  
  return (
    <Grid container bgcolor={'#f9ecec'} width={'100vw'}>
      <Grid item xs={12} md={6} display={'flex'} justifyContent={'center'} alignItems={'center'} sx={{height: {xs: '40vh' ,md: '84vh'}, flexDirection: 'column'}}>
        
        <Typography variant="h2" sx={{fontSize: {xs: '38px', md: '60px'}}} color={'#f95959'} textTransform={'uppercase'} textAlign={'center'} p={1}>{data[currentData].title}
        </Typography>
        
        <Button variant="contained" sx={{ bgcolor: '#f95959', mt: '30px' , ":hover": {bgcolor:'#f9ecec',color: '#f95959'}}} onClick={clickHandler}>ORDER NOW</Button>
      </Grid>
      <Grid item xs={12} md={6} textAlign={'center'} position='relative' sx={{height: {xs: '40vh' ,md: '84vh'}}}>
        <Image 
         src={data[currentData].image}
         layout="fill"
         objectFit="cover"
         alt='slides'
        />
      </Grid>
    </Grid>
  );
}
