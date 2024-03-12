import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectProduct } from "@/libs/db";
import { Cart } from "@/libs/modal/product"
 

export async function GET(){
    try {
        await mongoose.connect(connectProduct)
        const cart = await Cart.find();
        return NextResponse.json({result: cart, success: true})
    } catch (error) {
        return NextResponse.json({result: 'Not Found!', success: false})
    }

}

export async function POST(request){
    const payload = await request.json()
    try {
        await mongoose.connect(connectProduct)
        const cart = new Cart(payload);
        const newItem = await cart.save();
        return NextResponse.json({result: newItem, success: true})
    } catch (error) {
        return NextResponse.json({result: 'Data not saved!', success: false})
    }

}