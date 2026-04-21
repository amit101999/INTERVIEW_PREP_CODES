export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // ASSUME we have user schema
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const userData = { id: user._id, email: user.email, role: user.role };

    // Generate JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, "ABDCD1234", {
      expiresIn: "1h",
    });
    res
      .cookie("token", token, { httpOnly: true })
      .json({ message: "Login successful", user: userData });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal server error error in login route" });
  }
};
