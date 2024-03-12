import React from 'react'
import Link from 'next/link'
import { AppBar,Box,Typography } from '@mui/material'

function Footer() {
  return (
    <>
    <AppBar component="footer" position="static" sx={{bgcolor: 'white', borderTop: '1.7px solid #f95959'}}>
      <Box display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
    <Link href='/' style={{color: "#f95959"}}><Typography variant="h4" py={'12px'} fontWeight={'bold'} pl={1}>FOODIE</Typography></Link>
    <Typography color={"#f95959"}>&copy; All RIGHTS RESERVED.</Typography>
    </Box>
    </AppBar>
    </>
  )
}

export default Footer