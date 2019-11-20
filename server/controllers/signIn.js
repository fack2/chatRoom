const bcrypt = require("bcrypt")
const getUser = require("../database/queries/getUser")
////////////////////////////00000000000000000000000000000000000000000000000000000000000000000000000000
exports.signIn = (req, res, next) => {
  const { email, password, token } = req.body
  console.log(email, "           ", password, "          ", token, "email, password, token")
  // res.json({ succes: "signIn validation is confirmed" })
  getUser(email)
    .then(user => {
      console.log(user, "uuuuuuuuuuuuuu")
      bcrypt.compare(password, user.password, (err, res2) => {
        console.log(res2, "222222222222")
        if (err) {
          console.log("errrrrrrrrrrrrrrrrrrr", err, "oooooooooooooooorrrr")
          next(err)
        }
        if (res2 === true) {
          res.send("res==true login success")
        } else res.send("res==true login success")
      })
    })
    .catch(err => console.log(err, "aaaaaaaaaaaaaaaaaaaa"))
  // bcrypt.hash(password, 10, (err, hash) => {
  //   if (err) {
  //     console.log(err)
  //   }
  //   addUser(name, email, hash)
  //     .then(result => {
  //       res.json(result)
  //     })
  //     .catch(err => {
  //       next(err)
  //     })
  // })
}
