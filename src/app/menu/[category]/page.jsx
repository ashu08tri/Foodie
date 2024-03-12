import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import styles from './page.module.css';

const {NEXT_PUBLIC_API_URL} = process.env;

const getData = async () => {
  let res = await fetch(`${NEXT_PUBLIC_API_URL}/api/categories/category`);
  res = await res.json();
  return res.result;
}


async function Category() {

  const pizzas = await getData();

  return (
    <Grid container>

      {pizzas.map((item, i) =><Grid item xs={12} sm={6} md={4} width={'100%'} border={'1px solid #f95959'} sx={{":nth-of-type(odd)": {background: '#f9ecec'}}} key={i}>
      <Link href={`/products/${item._id}`}>
        <Box sx={{ height: { xs: '60vh', md: '75vh' } }} display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} className={styles.mainGrid}>
          <Box sx={{ position: 'relative', flex: 1, width: '55%', ':hover': { rotate: '60deg' }, transition: 'all 0.5s' }}>
            <Image src={item.img} layout='fill' objectFit='contain' alt="category_img" />
          </Box>

          <Box display={'flex'} justifyContent={'space-between'} width={'100%'} color={'#f95959'} alignItems={'center'} className={styles.box} p={2}>
            <Typography variant='h1' fontSize={'2rem'}>{item.title}</Typography>
            <Typography variant='h2' fontSize={'25px'} className={styles.text}>&#8377; {item.price}</Typography>
            <Button className={styles.button} variant="contained" sx={{ bgcolor: '#f95959', ":hover": {bgcolor:'#f9ecec',color: '#f95959'}, display: 'none'}} size='small'>Add to cart</Button>
          </Box>

        </Box>
        </Link>
      </Grid>
    )}

    </Grid>
  )
}

export default Category;