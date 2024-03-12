import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectProduct } from "@/libs/db";
import { Pizza } from "@/libs/modal/product"
 

export async function GET(){
    try {
        await mongoose.connect(connectProduct)
        const pizza = await Pizza.find();
        return NextResponse.json({result: pizza, success: true})
    } catch (error) {
        return NextResponse.json({result: false, success: false})
    }

}