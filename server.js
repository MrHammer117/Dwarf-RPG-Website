const express = require('express')
const app = express()
const port=3000

//static files
app.use(express.static('public'))
app.use('/images', express.static(__dirname + 'public/images'))



app.get('', (req, res) => {
    res.sendFile(__dirname + '/dwarvenHome.html')  
    
})
app.get('/dwarfDemo.html', (req, res) => {
    res.sendFile(__dirname + '/dwarfDemo.html')
})
app.get('/dwarfFeatures.html', (req, res) => {
    res.sendFile(__dirname + '/dwarfFeatures.html')
})
app.get('/dwarfFeedback.html', (req, res) => {
    res.sendFile(__dirname + '/dwarfFeedback.html')
})
app.get('/dwarvenHome.html', (req, res) => {
    res.sendFile(__dirname + '/dwarvenHome.html')  
})
app.get('/default.css', (req, res) => {
    res.sendFile(__dirname + '/default.css')  
})

// Listen in on port 3000
app.listen(port, () => console.info('Listening on port ${port}'))
