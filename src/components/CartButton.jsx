"use client"
import { Button } from "@mui/material";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { decrement } from "@/utils/cartValue";



function CartButton({ product,price }) {
 
    const dispatch = useDispatch();
    const route = useRouter();
    let email;
    const{data,status} = useSession()
    if(status === 'authenticated'){
        email = data.user.email;
      }else{
        email = null
      }
   
      const cartHandler = async (product,price,email) => {
        
         const cartData ={
             product,
             price,
             status: 'Arriving Soon',
             date: new Date(),
             userEmail: email
         }
         let res = await fetch('foodie-resturant.vercel.app/api/orders', {
             method: 'POST',
             body: JSON.stringify(cartData),
             cache: 'no-store'
         });
         res = await res.json();
         if(res.success){
             alert('Order Complete! Please check the order page for more details.')
             dispatch(decrement())
             await fetch('foodie-resturant.vercel.app/api/cart/delete',{
                method: 'DELETE'
             })
             route.push('/order')
         }else{
             alert('Something went worng! Please try again.')
             console.log(res.result)
         }
     }
   
    return (
        <Button
         variant="containerd" 
         sx={{ bgcolor: '#f95959', color: '#f9ecec', margin: '10px 0', ":hover": { bgcolor: '#f95959', color: '#f9ecec', scale: '1.1' }, transition: 'all 0.3s' }} size='small'
         onClick={() => cartHandler(product,price,email)}
         >Checkout</Button>
    )
}

export default CartButton;
