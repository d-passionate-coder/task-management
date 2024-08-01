import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const handleLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const foundUser = await User.findOne({ email }).exec();

    if (!foundUser) {
      return res.status(401).send("User not found");
    }

    const match = await bcrypt.compare(password, foundUser.password);

    if (!match) {
      return res.status(401).send("Incorrect password");
    }

    const { id } = foundUser;
    const token = jwt.sign({ id }, process.env.TOKEN_SECRET, {
      expiresIn: "7d",
    });

    return res
      .cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "None",
        maxAge: 7 * 24 * 60 * 60 * 1000,
      })
      .send(foundUser);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export default handleLogin;
