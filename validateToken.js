const jwt = require("jsonwebtoken");

const validateToken = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const verifyToken = jwt.verify(token, "afjjsahjfhjkas");
    if (verifyToken) {
      res.status(200).send("OK");
      next();
    }
  } catch (error) {
    res.status(401).send("You cant connect into this route");
    console.log(error);
  }
};
module.exports = validateToken;
