 "use client"
 import { Button } from "@mui/material";

const deleteHandler = async (id) => {
    let del = await fetch('http://localhost:3000/api/cart/' + id,{
        method: 'DELETE'
    });
    del = await del.json()
        if(del.success){
            alert('Item Removed!')
        }else{
            alert('something went wrong')
        }
    
}

function DeleteButton({id}) {
  return (
    <Button sx={{ color: '#f95959', margin: '10px 0', ":hover": { bgcolor: '#f9ecec' } }} size='small' onClick={() => deleteHandler(id)}>X</Button>
  )
}

export default DeleteButton