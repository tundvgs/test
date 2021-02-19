const express = require('express')
const app = express()

app.get('/test', function (req, res) {
    res.send({
        data: 1111
    })
})

app.listen(5000,  () => console.log('app running port 5000'))