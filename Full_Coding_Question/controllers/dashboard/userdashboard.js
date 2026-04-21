import User from "../models/User.js";

export const getUserDashboard = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const role = user.role;
    if (role !== "admin") {
      return res.status(403).json({ message: "Access denied" });
    }
    res.json({ message: `Welcome to the user dashboard, ${user.name}!` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
