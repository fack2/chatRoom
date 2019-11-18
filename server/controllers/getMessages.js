const getMessagesQuery = require("../database/queries/getMessages")

const getMessages = (req, res) => {
  getMessagesQuery()
    .then(data => res.json(data))
    .catch(() => res.status(500).json({ err: "error for get message conroller" }))
}
module.exports = getMessages
