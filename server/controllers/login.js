const bcrypt = require("bcrypt");
const { sign } = require("jsonwebtoken");
const { getPassword } = require("../database/queries/getPassword");

const { SECRET } = process.env;

const createToken = (email, secret) => {
  return sign({ email }, secret);
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "all fileds are required" });
  }

  getPassword(email, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      if (result) {
        const hash = result.password;
        bcrypt
          .compare(password, hash)
          .then(result => {
            if (result) {
              const token = createToken(email, SECRET);
              res.cookie("token", token, { maxAge: 9000000, httpOnly: true }).json({ status: "sucess", token });
            } else {
              res.status(400).json({ message: "incorrect email or paswword" });
            }
          })
          .catch(err => console.log(err));
      } else {
        res.status(400).json({ message: "incorrect email or password", status: "failed" });
      }
    }
  });
};
