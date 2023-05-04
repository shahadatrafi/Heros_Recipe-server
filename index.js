const express = require('express')
const app = express()
const port = 5000

const chefData = require('./data.json')

app.get('/', (req, res) =>{
    res.send('Server is Running')
})

app.get('/chef-data', (req, res)=>{
    res.send(chefData)
})

app.listen(port, () => {
    console.log(`chef hunter server is running on port ${port}`)
})