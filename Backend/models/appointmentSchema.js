import mongoose from "mongoose";
import validator from "validator";

const appointmentSchema = new mongoose.Schema({

    firstName: {
      type: String,
      required: true,
      minLength: [3, "First Name Must At Least 3 Characters!"],
    },
    lastName: {
      type: String,
      required: true,
      minLength: [3, "Last Name Must At Least 3 Characters!"],
    },
    email: {
      type: String,
      required: true,
      validate: [validator.isEmail, "Please Provide A valid Email"],
    },
    phone: {
      type: String,
      required: true,
      minLength: [11, "phone number must contain exact 11 Digits"],
      maxLength: [11, "phone number must contain exact 11 Digits"],
    },
    pincode: {
      type: String,
      required: true,
      minLength: [6, "phone number must contain exact 6 Digits"],
      maxLength: [6, "phone number must contain exact 6 Digits"],
    },
    dob: {
      type: Date,
      required: [true, "DOB is required"],
    },
    gender: {
      type: String,
      required: true,
      enum: ["male", "female"],
    },
    appointment_date:{
        type: String,
        required: true,
    },
    department:{
        type: String,
        required: true,
    },
    doctor:{
        firstName:{
            type: String,
            required: true,
        },
        lastName:{
            type: String,
            required: true,
        }
    },
    hasVisited:{
        type: Boolean,
        default: false,
    },
    doctorId:{
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    patientId:{
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    status:{
        type:String,
        enum:["Pending","Accepted","Rejected"],
        default:"Pending",
    }
  });
  export const Appointment = mongoose.model('Appointment',appointmentSchema)