const getMessagesQuery = require("../database/queries/getMessages")

const getMessages = (req, res) => {
  getMessagesQuery()
    .then(data => res.json(data))
    .catch(err => res.status(500).json({ err: "error for get messages controller" }))
}
module.exports = getMessages
