import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectProduct } from "@/libs/db";
import { Menu } from "@/libs/modal/product";

export async function GET(){
    try {
        await mongoose.connect(connectProduct)
        const menu = await Menu.find();
        return NextResponse.json({result: menu, success: true})
    } catch (error) {
        return NextResponse.json({result: false, success: false})
    }

}
