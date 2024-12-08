import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    street: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipcode: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: String, required: true }
});

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: { type: Array, required: true },  // Changed to Array for list of items
    amount: { type: Number, required: true },
    address: { type: addressSchema, required: true },  // Use the address schema here
    status: { type: String, default: "Food Processing" },
    date: { type: Date, default: new Date() },
    payment: { type: Boolean, default: false }
});

const orderModel = mongoose.model.orders || mongoose.model("order", orderSchema);
export default orderModel;
