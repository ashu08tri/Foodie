import mongoose from "mongoose";


// Users Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    image: String,
    isAdmin: {
        type: Boolean,
        default: true
    }
})

export const User = mongoose.models.users || mongoose.model('users',userSchema)

const orderSchema = new mongoose.Schema({
    product: Array,
    date: { type: Date, default: Date.now },
    price: Number,
    status: String,
    userEmail: {
        type: String,
        unique: true
    }
})

export const Order = mongoose.models.orders || mongoose.model('orders',orderSchema)