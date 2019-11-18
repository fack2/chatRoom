const dbConnection = require("../dbConnection")
const getMessage = userId => {
  // console.log(email, "email0000")
  return dbConnection
    .query(
      "SELECT users.user_id,name,img,color,time,message_id,description FROM messages inner Join users on users.user_id=messages.user_id where users.user_id=$1 order  by time desc limit 1 ",
      [userId]
    )
    .then(res => res.rows)
    .catch(err => err)
}
module.exports = getMessage
