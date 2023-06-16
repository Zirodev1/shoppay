import nc from "next-connect";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";  // Import jsonwebtoken
import { validateEmail } from "../../../utils/validation";
import db from "../../../utils/db";
import User from "../../../models/User";
import { sendEmail } from "../../../utils/sendEmails";
import { resetEmailTemplate } from "../../../emails/resetEmailTemplate";

const handler = nc();

handler.put(async (req, res) => {
  try {
    await db.connectDb();
    const { user_id, password } = req.body;
    const user = await User.findById(user_id);
    if (!user){
        return res.status(400).json({ message: "This acccount does not exist." })
    }
    const cryptedPassword = await bcrypt.hash(password, 12);
    await user.updateOne({
        password: cryptedPassword,
    })
    await db.disconnectDb();
    res.json({ email: user.email });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
