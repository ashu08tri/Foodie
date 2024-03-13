"use client"
import { useEffect, useState } from "react";
import { AppBar,Box,IconButton,Typography } from "@mui/material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import {AnimatePresence,motion} from 'framer-motion';
import { useSelector } from "react-redux";
import Modal from "./Modal";
import Link from "next/link";
import Image from "next/image";
import User from "./User";
import NavCountDown from './NavCountDown'


function NavBar() {

  const [menuState,setMenuState] = useState(false);
  const [countAnimate, setCountAnimate] = useState([]);

  const menuStateHandler = () => {
    setMenuState(!menuState)
  }

  const count = useSelector(state => state.counter.value);
  useEffect(()=>{
    setCountAnimate([1,Math.random()*(1.3-1.2)+1.2,1])
  },[count])

  return (
    <>
    <AppBar component="nav" position="static" sx={{bgcolor: 'white', borderBottom: '1.7px solid #f95959'}}>
      <Box display={'flex'} sx={{justifyContent: {xs: 'space-between', md: 'space-around'}}} alignItems={'center'} color={'#f95959'}>

      <Box sx={{display: {xs: 'none', md: 'flex'}}} justifyContent={'space-around'} gap={3}>
        <Link href='/' style={{color: "#f95959"}}><Typography>HOMEPAGE</Typography></Link>
        <Link href='/menu' style={{color: "#f95959"}}><Typography>MENU</Typography></Link>
      </Box>

      <Link href='/' style={{color: "#f95959"}}><Typography variant="h4" py={'12px'} fontWeight={'bold'} pl={1}>FOODIE</Typography></Link>

      <Box sx={{display: {xs: 'none', md: 'flex'}}} justifyContent={'space-around'} gap={3}>
      <User />
      <Link href='/cart' style={{color: "#f95959"}}>
        <Box display={'flex'} alignItems={'center'}>
          <motion.div animate={{scale: countAnimate}}><Image src='/cart.png' width={20} height={20} alt="cart_icon"/></motion.div>
        <Typography pl={1}>CART {count}</Typography>
        </Box>
        
        </Link>
      </Box>
      <IconButton sx={{color: '#f95959', display: {xs: 'block', md: 'none'}}} edge="start" onClick={menuStateHandler}>
        {!menuState ? <MenuRoundedIcon /> : <MenuOpenRoundedIcon/>}
      </IconButton>
      </Box>

    </AppBar>
    <AnimatePresence>
    {menuState && <Box sx={{display: {xs: 'block', md: 'none'}}}><Modal stateHandler={menuStateHandler} /></Box>}
    </AnimatePresence>
    </>
  )
}

export default NavBar
