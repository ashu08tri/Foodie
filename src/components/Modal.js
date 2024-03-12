"use client"
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useSelector } from 'react-redux';
import { signOut, useSession } from "next-auth/react"

const boxStyle = {
  position: "absolute",
  height: '100%',
  background: '#f95959',
  width: '100%',
  zIndex: '1',
  display: 'grid',
  placeItems: 'center',
  textAlign: 'center'
}

const container = {
  hidden: { opacity: 0, y: -100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      duration: 0.5, ease: 'backInOut'
    }
  }
};

const listItem = {
  hidden: { opacity: 0, y: -100 },
  show: { opacity: 1, y: 0 }
};

function Modal(props) {

  let cartCount = useSelector(state => state.counter.value);

  const {status} = useSession();

  const listItems = [
    {
      name: 'HomePage',
      address: '/'
    },
    {
      name: 'Menu',
      address: '/menu/:category'
    },
    {
      name: 'Contact',
      address: '/contact'
    },
    {
      name: `Cart (${cartCount})`,
      img: <Image src="/cart.png" width={20} height={20} alt="cart_icon"/>,
      address: '/cart'
    },
  ]

  
  return (

    <motion.div style={boxStyle}
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
    >
      <motion.ul style={{ listStyle: 'none', letterSpacing: '2px' }}>

        {listItems.map((item, i) => <motion.li style={{ padding: '10px 0', fontWeight: 'bold', fontSize: '1.6rem'}} whileTap={{scale: [0.8,1.2],transition: 'ease in'}} onClick={props.stateHandler}
          variants={listItem} key={i}
        ><Link href={item.address} style={{ color: 'white' }} key={i}>{item.img?item.img: null} {item.name}</Link>
        </motion.li>)}


    {status === 'authenticated' ? <>
    
    <motion.li style={{ padding: '10px 0', fontWeight: 'bold', fontSize: '1.6rem' }} whileTap={{scale: 1.2}} onClick={props.stateHandler} variants={listItem}>
            <Link href='/order' style={{ color: 'white' }}>Orders</Link>
          </motion.li>

    <motion.li style={{ padding: '10px 0', fontWeight: 'bold', fontSize: '1.6rem' }} whileTap={{scale: 1.2}} onClick={props.stateHandler} variants={listItem}>
          <span onClick={() => signOut()} style={{color: "white", cursor: 'pointer'}}>Logout</span></motion.li></>:
          
          <motion.li style={{ padding: '10px 0', fontWeight: 'bold', fontSize: '1.6rem' }} whileTap={{scale: 1.2}} onClick={props.stateHandler} variants={listItem}>
            <Link href='/login' style={{ color: 'white' }}>Login</Link>
          </motion.li>
          }


        <motion.li style={{ margin: '12px 0', color: 'white', fontSize: '1.6rem', background: 'orange', padding: '5px', borderRadius: '10px' }} whileTap={{scale: 1.2}} onClick={props.stateHandler} variants={listItem}>
          <Image src="/phone.png" width={20} height={20} alt='phone_icon'/>
          <span style={{paddingLeft: '10px'}}>555-777-88</span>
        </motion.li>
      </motion.ul>

    </motion.div>

  )
}

export default Modal