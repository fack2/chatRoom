const dbConnection = require("../dbConnection")
const getMessages = () => {
  return dbConnection
    .query(
      "SELECT users.user_id,name,img,color,time,message_id,description FROM messages inner Join users on users.user_id=messages.user_id "
    )
    .then(res => res.rows)
    .catch(err => err)
}
module.exports = getMessages
