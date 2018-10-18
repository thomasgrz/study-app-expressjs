const express = require("express")
const app = express()
const port = 3000

app.get("/",(request, response)=>{
    response.send("hey there you found me")
})

app.listen(port, ()=>console.log(`listening on port ${port}`))