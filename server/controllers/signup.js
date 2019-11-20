const bcrypt = require("bcrypt")
const addUser = require("../database/queries/addUser")

exports.signup = (req, res, next) => {
  const { name, email, password } = req.body
  // res.json({ succes: "signup validation is confirmed" })

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.log(err)
    }
    addUser(name, email, hash)
      .then(result => {
        res.json(result)
      })
      .catch(err => {
        next(err)
      })
  })
}
