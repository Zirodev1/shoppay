 import nc from "next-connect"
 import bcrypt from "bcrypt"
 import { validateEmail } from "@/utils/validation"
 import User from "@/models/User"
 import db from "@/utils/db"
 import { createActivationToken } from "@/utils/tokens"

 const handler = nc();

 handler.post(async (req, res) => {
    try {
        await db.connectDb();
        const { name, email, password } = req.body;
        if (!name || !email || !password){
            return res.status(400).json({ message: "Please fill out all fields."});
        }
        if (!validateEmail(email)){
            return res.status(400).json({ message: "Invalid Email."});
        }
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "This email already exist."});
        }
        if (password.length < 6){
            return res
            .status(400)
            .json({ message: "Password mudt be at least 6 characters."});
        }
        const cryptedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({ name, email, password: cryptedPassword });
        const addedUser = await newUser.save();
        const activation_token = createActivationToken({
            id: addedUser._id.toString(),
        })
        const url = `${process.env.BASE_URL}/activate/${activation_token}`;
        res.send(url);
    }catch{
        res.status(500).json({message: error.message});
    }
 })

 export default handler;