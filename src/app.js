const express = require('express');
const bodyParser = require('body-parser');

const receipt = require('./routes/receipt')
const app = express();

app.use(bodyParser.json());


app.use('/receipts', receipt);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;