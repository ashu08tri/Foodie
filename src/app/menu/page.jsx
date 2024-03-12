import {Container,Grid, Typography,Button} from '@mui/material';
import Link from 'next/link';

const menuData = [
  {
    id: 1,
    slug: "pastas",
    title: "Italian Pastas",
    desc: "Savor the taste of perfection with our exquisite Italian handmade pasta menu.",
    img: "/temporary/m1.png",
    color: "white",
  },
  {
    id: 2,
    slug: "burgers",
    title: "Juicy Burgers",
    desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
    img: "/temporary/m2.png",
    color: "black",
  },
  {
    id: '3',
    slug: "pizzas",
    title: "Cheesy Pizzas",
    desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
    img: "/temporary/m3.png",
    color: "white",
  },
];

function Menu() {

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