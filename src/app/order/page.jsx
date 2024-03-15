"use client"
import { TableContainer, Table, TableBody, TableHead, TableCell, TableRow, Paper, tableCellClasses,Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { styled } from '@mui/material/styles';
import Loading from '../login/Loading';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#f95959',
    color: 'white',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    color: '#f95959'
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#f9ecec'
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


function Order() {

  const {status} = useSession();
  
   if(status !== 'authenticated'){
   redirect('/login')
   }

  if(status === 'loading'){
    return <Loading />
  }
  
  const { data } = useQuery({
    queryKey: 'orders',
    queryFn: async() => {
      try{
        let res = await fetch('https://foodie-resturant.vercel.app/api/orders');
        if(res.ok){
          res = await res.json();
          return res.result;
        }
      }
      catch(e){
        console.log(e);
        return null
      }
    }
  })
  

  return (
    
    <TableContainer component={Paper} sx={{ p: '16px', height: '84vh', overflowY: 'scroll', '::-webkit-scrollbar': { display: 'hidden' } }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Price</StyledTableCell>
            <StyledTableCell>Products</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
          </TableRow>
        </TableHead>

        {data && data.map(item =>  <TableBody key={item._id}>
         <StyledTableRow>
            <StyledTableCell>{item.date.split('T')[0]}</StyledTableCell>
            <StyledTableCell>{item.price}</StyledTableCell>
            <StyledTableCell>{item.product + " "}</StyledTableCell>
            <StyledTableCell>{item.status}</StyledTableCell>
          </StyledTableRow>
        </TableBody>)}
      </Table> 
    </TableContainer>
  )
}

export default Order;
