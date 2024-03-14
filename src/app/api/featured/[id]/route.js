import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectProduct } from "@/libs/db";
import { FeaturedProduct } from "@/libs/modal/product"


export async function GET(request,{params}){
    const id = params.id;
    try {
        await mongoose.connect(connectProduct)
        const featuredProduct = await FeaturedProduct.find({_id: id});
        return NextResponse.json({result: featuredProduct, success: true})
    } catch (error) {
        return NextResponse.json({result: false, success: false})
    }

}