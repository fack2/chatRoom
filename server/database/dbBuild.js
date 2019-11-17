const fs = require("fs")
const dbConnection = require("./dbConnection")

const createDataBase = fs.readFileSync(`${__dirname}/dbBuild.sql`).toString()
const initDate = fs.readFileSync(`${__dirname}/initValue.sql`).toString()

dbConnection.query(createDataBase, (err, res) => {
  console.log("database is connected successfully")
  dbConnection.query(initDate, (err2, res2) => {
    console.log("data inserted successfully")
    if (err2) {
      throw err2
    }
  })
  if (err) {
    throw err
  }
})
