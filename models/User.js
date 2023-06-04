import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Please Enter your full name.",
    },
    email: {
        type: String,
        required: "Please enter your email address.",
        trim: true,
        unique: true,
    },
    password: {
            type: String,
            required: "Please enter a password."
    },
    role: {
            type: String,
            default: "user",
    },
    image: {
            type: String,
            default: 
            "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png"
    },
    emailVerified: {
            type: Boolean,
            default: false,
    },
    defaultPaymentdMethod:{
            type: String,
            default: "",
    },
    address: [
            {
                firstName: {
                    type: String,
                },
                lastName: {
                    type: String,
                },
                phoneNumber: {
                    type: String,
                },
                address1: {
                    type: String,
                },
                address2: {
                    type: String,
                },
                city: {
                    type: String,
                },
                zipCode: {
                    type: String,
                },
                state: {
                    type: String,
                },
                country: {
                    type: String,
                },
                active: {
                    type: Boolean,
                    default: false,
                },
            },
        ],
    },
    {
    timestamps: true,
    }
);

const user = mongoose.models.User || mongoose.model("User", userSchema);

export default User;