import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectProduct } from "@/libs/db";
import { Cart } from "@/libs/modal/product"


export async function DELETE(){
    try {
        await mongoose.connect(connectProduct)
        await Cart.deleteMany();
        return NextResponse.json({success: true})
    } catch (error) {
        return NextResponse.json({success: false})
    }
}