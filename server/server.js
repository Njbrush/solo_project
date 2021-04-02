const express = require('express')
const app = express()
const port = 3000
const path = require('path');

app.use('/build', express.static(path.join(__dirname, '../build')));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get('/', (req, res) => {
    return res.status(200).sendFile(path.join(__dirname, './index.html'));
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})