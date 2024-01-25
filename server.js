const express = require('express')
const app = express()
const vaatteet = require('./vaatteet.json')
const path = require('path')


//Tehdään polkumääritys frontend kansioon
const fronttipolku = path.join(__dirname, './frontend')

//Sanotaan että em. polussa on tiedonsisältöä
//jota palvelin käyttää kun se saa http requestin
app.use(express.static(fronttipolku))



//Vaatedatan lähettäminen
app.get('/api/vaatteet', (req, res) =>{
    res.json(vaatteet)
    }
)

//Palvelin kuuntelee portissa 3000
app.listen('3000', () =>
    console.log("Server is up on port 3000")
)


//Hello World
// app.get('/api/hello', (req, res) =>{
//     console.log("Pyyntö tuli")//Tulostaa konsololiin
//     res.send("Hello World! Im Express web server!")//Näkyy sivuilla
//     }
// )
