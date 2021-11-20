const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000;

app.post('/submit-questionnaire', (req, res) => {
  console.log(`Responses:\n${JSON.stringify(req.body, null, 2)}`)
  res.end()
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})