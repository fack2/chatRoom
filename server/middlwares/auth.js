const cookie = require("cookie");
const { verify } = require("jsonwebtoken");
const { SECRET } = process.env;

exports.auth = (req, res, next) => {
  if (req.headers.cookie) {
    const { token } = cookie.parse(req.headers.cookie);
    return verify(token, SECRET, (err, result) => {
      if (err) {
        return res
          .status(401)
          .clearCookie("token")
          .json({
            status: "error",
            message: "unautorized"
          });
      }
      next()
    });
  } else {
    return res.status(401).json({ status: "fail", message: "unauthorized" });
  }
};
