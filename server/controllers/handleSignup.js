import User from "../models/User.js";
import bcrypt from "bcrypt";

const handleSignup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const alreadyExists = await User.findOne({ email }).exec();
    if (alreadyExists) {
      return res.status(403).send("Email already exists!");
    }
    const hash = await bcrypt.hash(password, 10);

    const newUser = { name, email, password: hash };
    await User.create(newUser);
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default handleSignup;
