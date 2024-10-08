import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const adminSchema = new mongoose.Schema({
    name : {
        type : String,
        required : false,
    },
    email : {
        type : String,
        lowercase : true,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    },
    mobile : {
        type : Number,
        required : true,
        unique : true,
    }
},{timestamps : true})

adminSchema.pre("save", async function(next) {

    // Check if the password field is modified
    if(!this.isModified("password")) return next();
    
    
    // Hash the password with a salt factor of 10
    this.password = await bcrypt.hash(this.password, 10)
    next();
    })
    
    adminSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password, this.password)
    }

export const Admin = mongoose.model("Admin",adminSchema);