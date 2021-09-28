const express = require('express')
const app = express()
const { chessPlayers } = require('./data.js')
const cors = require('cors')

app.use(cors())

app.get('/chess-players', (req, res) => {
  res.json(chessPlayers);
})

app.get('/chess-players/:id', (req,res) => {
    const matchingPlayer = chessPlayers.find(player => player.id === Number(req.params.id))
    res.json(matchingPlayer);
})


const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

