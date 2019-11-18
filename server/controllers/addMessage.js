const addMessageQuery = require("../database/queries/addMessage")

const addMessage = (userId, description) => {
  // const { userId, description } = req.body
  return addMessageQuery(description, userId)
    .then(data => data)
    .catch(() => err)
}
module.exports = addMessage
