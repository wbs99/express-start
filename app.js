const express = require("express")
const app = express()
const port = 3000

app.set("case sensitive routing", true) // 区分 URL 中的 大小写
app.set("views", "Jack") // Jack 是目录名称
app.set("view engine", "pug")

app.use(express.json()) // 解析 JSON 数据
app.use(express.static("yyy")) // 访问 localhost:3000/index.html 即可得到 index.html 的内容
app.use(express.urlencoded())

app.get("/style.css", (request, response, next) => {
  response.send("URL 是 style.css")
})
app.get("/STYLE.css", (request, response, next) => {
  response.send("URL 是 STYLE.css")
})
app.get("/test", (request, response, next) => {
  response.render("test", { pageTitle: "Rose" })
})
app.post("/test", (request, response, next) => {
  response.send("post test")
})
app.delete("/test", (request, response, next) => {
  response.send("delete test")
})

app.use((request, response, next) => {
  console.log(request.body)
  response.send("hi")
  next()
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
