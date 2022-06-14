const express = require('express');
const path = require('path');
const middleware = require('./middleware');
const api = require('./api');

// const port = process.env.port ?? 3000
const port = 80
const app = express()

app.use(express.static(path.resolve(__dirname,'static')))
app.use(middleware.requstTime)
app.use(middleware.logger)



// app.get('/',(req,res)=>{
//     //res.send('<h1>hello express!</h1>')
//     res.sendFile(path.resolve(__dirname,'static','index.html'))
// })

// app.get('/post',(req,res)=>{
//     res.sendFile(path.resolve(__dirname,'static','post.html'))
// })

app.get('/api',api.getServers)

app.listen(port, ()=>{
    console.log(`Server has been started on port ${port}...`)
})