const express = require('express')
const app = express()
const port = process.env.port||3000
const mongoose = require('mongoose');
require('dotenv').config()
async function main() {
  await mongoose.connect(process.env.DB_URL)
}
main().then(()=>console.log("mongodb connected sucessfully")).catch(err => console.log(err));
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// gA9OqxwDDKHKT0mY
