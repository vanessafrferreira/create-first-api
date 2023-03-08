
const PORT = 3000

const express = require("express")
const app = express()
app.listen(PORT, ()=> {
    console.log("servidor rodando")
})


app.get("/vanessa", (req, res,next)=> {

    res.json(["testando servidor", "tudo certinho"])
})