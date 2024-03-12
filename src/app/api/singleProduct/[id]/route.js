import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectProduct } from "@/libs/db";
import { Pizza } from "@/libs/modal/product"


export async function GET(request,{params}){
    try {
        await mongoose.connect(connectProduct)
        const singleProduct = await Pizza.find({_id: params.id});
        return NextResponse.json({result: singleProduct, success: true})
    } catch (error) {
        return NextResponse.json({result: false, success: false})
    }

}