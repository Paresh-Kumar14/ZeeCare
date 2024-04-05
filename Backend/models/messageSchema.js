import mongoose from "mongoose";
import validator from "validator";

const messageSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true,
        minLength:[3,"First Name Must At Least 3 Characters!"]
    },
    lastName:{
        type: String,
        required: true,
        minLength:[3,"Last Name Must At Least 3 Characters!"]
    },
    email:{
        type: String,
        required: true,
        validate:[validator.isEmail,"Please Provide A valid Email"]
    },
    phone:{
        type: String,
        required: true,
        minLength:[11,"phone number must contain exact 11 Digits"],
        maxLength:[11,"phone number must contain exact 11 Digits"],
    },
    message:{
        type: String,
        required: true,
        minLength:[10,"Message must contain at least 10 characters"]
    }

})
export const Message = mongoose.model("Message",messageSchema)