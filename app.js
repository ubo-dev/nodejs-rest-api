

const PORT = 3000

const express = require('express');
const app = express();
app.use(express.json())

app.listen(PORT, () => {
    console.log("server is listening on port: " + PORT)
})

app.get("/get", (req, res, next) => {
    res.json({"message":"hello world!"})
})