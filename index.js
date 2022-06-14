const express = require('express');

// const port = process.env.port ?? 3000
const port = 80
const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>hello express!</h1>')
})

app.listen(port, ()=>{
    console.log(`Server has been started on port ${port}...`)
})