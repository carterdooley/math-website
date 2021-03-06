const express = require("express");
require('dotenv').config()
const cors = require("cors");
const path = require('path')
const app = express();

app.use(cors())
app.use(express.json())

const {
 getResources, createResources, insertResources, deleteUrl, addSongs, getSongs, deleteSongs
} = require('./controller.js')

const port = process.env.PORT || 4000


//Uploading Files to server

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/home.html'))
})
app.get('/calculator', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
})  
app.get('/eq', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/equations.html'))
})


app.get('/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/style.css'))
  })

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.js'))
  })

  app.get('/eq.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/equations.js'))
  })

  app.get('/hm.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/home.js'))
  })

  app.get('/ax.js', (req, res) => {
    res.sendFile(path.join(__dirname, '../node_modules/axios/dist/axios.min.js'))
  })


//Database
app.post('/api/seed', createResources)

app.post('/api/resources', insertResources)
app.post('/api/songs', addSongs)

app.get('/api/resources', getResources)
app.get('/api/songs', getSongs)

app.delete('/api/resources/:id', deleteUrl)
app.delete('/api/songs/:id', deleteSongs)
  
app.listen(port, () => console.log("Server running on 4000"));