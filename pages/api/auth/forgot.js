import nc from "next-connect";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";  // Import jsonwebtoken
import { validateEmail } from "../../../utils/validation";
import db from "../../../utils/db";
import User from "../../../models/User";
import { sendEmail } from "../../../utils/sendEmails";
import { resetEmailTemplate } from "../../../emails/resetEmailTemplate";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connectDb();
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "This email does not exist." });
    }
    
    const payload = { id: user._id.toString() };  // The data you want to encode into the token
    const secret = process.env.RESET_TOKEN_SECRET;  // The secret key for JWT
    const token = jwt.sign(payload, secret, { expiresIn: '1h' }); // Generate the token

    const url = `${process.env.BASE_URL}/auth/reset/${token}`;
    sendEmail(email, url, "", "Reset password.", resetEmailTemplate);
    await db.disconnectDb();
    res.json({
      message: "An email has been sent for password reset.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default handler;
