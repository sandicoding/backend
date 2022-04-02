const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.json({
        message: "Hello Backend"
    })
})

app.listen(4000,() => {
    console.log("listen port 3000")
});