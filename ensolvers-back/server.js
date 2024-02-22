const express = require('express')
const cors = require('cors')
const db = require("./app/models");
const bodyParser = require('body-parser')

const app = express()
const PORT = process.env.PORT || 8080

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

require('dotenv').config()
require("./app/routes/note.routes")(app);
require("./app/routes/tag.routes")(app);

db.sequelize.sync();

app.get('/', (req, res) => {
  res.json({message: 'Hola'})
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
