import User from "../../models/user.js";

const getAccessToken = (user) => {
  return jwt.sign({ userId: user._id, role: user.role }, "ABDCD1234", {
    expiresIn: "15m",
  });
};

const getRefreshToken = (user) => {
  return jwt.sign({ userId: user._id, role: user.role }, "REFRESH_SECRET", {
    expiresIn: "7d",
  });
};

export const login = async (req, res) => {
  try {
    const { email, passwrod } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isValidPassword = await user.comparePassword(passwrod);
    if (!isValidPassword) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const refreshToken = getRefreshToken(user);
    const accessToken = getAccessToken(user);
    await user.updateOne({ refreshToken });
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "Strict",
    });
    res.json({ user: { id: user._id }, accessToken });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
