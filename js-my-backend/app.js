const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const Note = require('./note')
const AllNotes = require('./allnotes')

app.use(express.json());
app.use(cors());

allnotes = new AllNotes

// n1 = new Note('On weekend', 'Buy cheese')
// n2 = new Note('Tomorrow', 'Go to Brighton')

app.get('/notes', function(req, res) {
  res.send(JSON.stringify(allnotes['content']))
});

app.post('/notes', function(req, res) {
  let title = req.body.title
  let content = req.body.content
  note = new Note(title, content)
  res.send(JSON.stringify(note))
});

app.listen(port, function() {
  console.log(`Example app listening on port ${port}!`)
});

// url is localhost:3000