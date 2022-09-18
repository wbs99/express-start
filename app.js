const express = require("express")
const app = express()
const port = 3000

app.get("/", (request, response) => {
  response.send("hello express")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
