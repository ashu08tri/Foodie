import {Box,Typography} from '@mui/material';

function Notification() {
  return (
    <Box textAlign={'center'} bgcolor={'#f95959'}>
      <Typography py={'10px'} color={'white'}>Free Delivery For All Orders Above &#8377;1000. Order Your Food Now!</Typography>
    </Box>
  )
}

export default Notification