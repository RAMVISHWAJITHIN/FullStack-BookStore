// const jwt = require('jsonwebtoken');
// const JWT_SECRET = process.env.JWT_SECRET_KEY

// const verifyAdminToken =  (req, res, next) => {
//     const token = req.headers['authorization']?.split(' ')[1];

//     // console.log(token)

//     if (!token) {
//         return res.status(401).json({ message: 'Access Denied. No token provided' });
//     }
//     jwt.verify(token, JWT_SECRET, (err, user) => {
//         if (err) {
//             return res.status(403).json({ message: 'Invalid credientials' });
//         }
//         req.user = user;
//         next();
//     })

// }

const jwt = require("jsonwebtoken");

const verifyAdminToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    
    if (!token) {
      return res.status(401).json({ message: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET); // Ensure JWT_SECRET is set in `.env`

    if (!decoded || !decoded.isAdmin) {
      return res.status(403).json({ message: "Forbidden. You are not authorized." });
    }

    req.user = decoded; // Attach user data to the request object
    next();
  } catch (err) {
    console.error("Token verification failed", err);
    return res.status(403).json({ message: "Invalid or expired token." });
  }
};

module.exports = verifyAdminToken;


