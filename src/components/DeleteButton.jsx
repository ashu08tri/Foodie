 "use client"
 import { Button } from "@mui/material";
 import { useRouter } from "next/navigation";


function DeleteButton({id}) {

  const router = useRouter();

  const deleteHandler = async (id) => {
    let del = await fetch('http://localhost:3000/api/cart/' + id,{
        method: 'DELETE'
    });
    del = await del.json()
        if(del.success){
            alert('Item Removed!')
            router.refresh();
        }else{
            alert('something went wrong')
        }
    
}
  return (
    <Button sx={{ color: '#f95959', margin: '10px 0', ":hover": { bgcolor: '#f9ecec' } }} size='small' onClick={() => deleteHandler(id)}>X</Button>
  )
}

export default DeleteButton