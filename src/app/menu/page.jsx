import {Container,Grid, Typography,Button} from '@mui/material';
import Link from 'next/link';
import { getMenuData } from '@/utils/fetchData';


async function Menu() {

   const menuData = await getMenuData();

  return (
 
    <Container>
      <Grid container height={'100vh'} alignItems={'center'}>

        {menuData.map((item,i) => <Grid key={i} item sx={{background: `url(${item.img})`, height: {xs: '30%', md: '65%'}}} xs={12} md={4} color={item.color} pl={2}>
          <Typography variant='h4' py={2}>{item.title}</Typography>
          <Typography width={'60%'}>{item.desc}</Typography>
          <Link href={`menu/${item._id}`}><Button variant='contained' size = 'small' sx={{mt: '15px'}}>Explore</Button></Link>
        </Grid>)}
       
      </Grid>
    </Container>
   
  )
}

export default Menu;