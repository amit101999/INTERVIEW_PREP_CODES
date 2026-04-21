export const verifyUser = (req, res, next) => {
  try {
    let token;
    const header = req.header.autherization;

    if (header && header.startsWith("Bearer ")) {
      token = header.split(" ")[1];
    } else if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }
    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, "ABDCD1234");
    if (!decoded) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    if(decoded.expiresIn < Date.now()){
      return res.status(401).json({ message: "Token expired" });
    }
    const userid = decoded.userId;
    const role = decoded.role;
    req.user = { id: userid, role: role };
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const refreshTokenHandler = (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(403).json({ message: "Refresh token missing" });
  }

  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.REFRESH_SECRET
    );

    const newAccessToken = jwt.sign(
      { userId: decoded.userId },
      process.env.ACCESS_SECRET,
      { expiresIn: "15m" }
    );

    return res.status(200).json({ accessToken: newAccessToken });

  } catch (err) {
    return res.status(403).json({ message: "Invalid or expired refresh token" });
  }
};
