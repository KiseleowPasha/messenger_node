const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3000;
const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');
const DB_DIR = path.join(__dirname, './db');
const DB_FILE = path.join(DB_DIR, 'messages.json');
const urlencodedParser = express.urlencoded({ extended: false });

const app = express();

app.use(express.static(DIST_DIR));
app.use(bodyParser.json());

app.get('/get_messages', (req, res) => {
  res.sendFile(DB_FILE);
});

app.get('*', (req, res) => {
  res.sendFile(HTML_FILE);
});

app.post('/post_messages', urlencodedParser, (req, res) => {
  const messages = JSON.stringify(req.body, null, '\n');
  fs.writeFile(DB_FILE, messages, (err) => {
    if (err) throw err;
  });
  res.send(req.statusCode);
});

app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
