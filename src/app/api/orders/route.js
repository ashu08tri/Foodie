import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectProduct } from "@/libs/db";
import { User,Order } from "@/libs/modal/user";
import { getAuthSession } from "@/utils/auth";




export async function GET(){
    try {
        const session  = await getAuthSession();
        await mongoose.connect(connectProduct)
        const user = await User.find();
        const isAdmin = user.map(item => item.isAdmin)
        const userEmail = user.map(item => item.email)
        if(isAdmin && session.user.email == userEmail){
            const order = await Order.find();
            return NextResponse.json({result: order, success: true})
        }
        
        const order = await Order.find({userEmail: user.email});
        return NextResponse.json({result: order, success: true})
    } catch (error) {
        return NextResponse.json({result: false, success: false})
    }

}

export async function POST(request){
    const payload = await request.json()
    try{
        await mongoose.connect(connectProduct);
        const order = new Order(payload);
        const newOrder = await order.save();
        return NextResponse.json({result: newOrder, success: true})
    } catch(error){
        return NextResponse.json({result: error, success: false})
    }
}