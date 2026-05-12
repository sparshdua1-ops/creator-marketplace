import jwt from "jsonwebtoken";

const authMiddleware = async (req, res, next) => {
  try {
    // Get authorization header
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        error: "No token provided",
      });
    }

    // Format: Bearer TOKEN
    const token = authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        error: "Invalid token",
      });
    }

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Attach user ID to request
    req.userId = decoded.id;

    next();
  } catch (error) {
    return res.status(401).json({
      error: "Unauthorized",
    });
  }
};

export default authMiddleware;