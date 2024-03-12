import mongoose from "mongoose";

//Menu Schema
const menuSchema = new mongoose.Schema({
    title: String,
    img: String,
    desc: String,
    color: String
})

export const Menu = mongoose.models.menus || mongoose.model('menus', menuSchema)

//Featured Products Schema
const featuredProductSchema = new mongoose.Schema({
    title: String,
    price: Number,
    img: String,
    desc: String,
})

export const FeaturedProduct = mongoose.models.featuredproducts || mongoose.model('featuredproducts', featuredProductSchema)

// Pizza Schema
const pizzaSchema = new mongoose.Schema({
    title: String,
    price: Number,
    img: String,
    desc: String,
    options: [{type : Object}]
})

export const Pizza = mongoose.models.pizzas || mongoose.model('pizzas',pizzaSchema)


// Cart Schema
const cartSchema = new mongoose.Schema({
    title: String,
    price: Number,
    img: String,
    quantity: Number,
    options: String
})

export const Cart = mongoose.models.carts || mongoose.model('carts',cartSchema)


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

//order schema
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


