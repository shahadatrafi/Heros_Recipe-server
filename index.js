const express = require('express')
const app = express()
const cors = require('cors')
const port = 5000
app.use(cors())
const chefData = require('./data.json')

app.get('/', (req, res) => {
    res.send('Server is Running')
})

app.get('/chefData', (req, res) => {
    res.send(chefData)
})
app.get('/chefData/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const selectedChef = chefData.find(c => c.id === id);
    console.log(selectedChef);
    res.send(selectedChef);
})

app.listen(port, () => {
    console.log(`chef hunter server is running on port ${port}`)
})