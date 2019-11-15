const fs = require("fs")
const dbConnection = require("./dbConnection")

const sql = fs.readFileSync(`${__dirname}/dbBuild.sql`).toString()

dbConnection.query(sql, (err, res) => {
  console.log("database is connected successfully")
  if (err) {
    throw err
  }
})
