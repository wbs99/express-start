import express from "express"
const app = express()
const port = 3000

app.get("/", (request, response) => {
  response.send("hello typescript express")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
