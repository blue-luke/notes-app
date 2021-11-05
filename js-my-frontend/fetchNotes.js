fetchNotes = (onceFetched) => {
  fetch('http://localhost:3000/notes')
  .then(response => response.json())
  .then(jsonData => { 
    onceFetched(jsonData);
  });
}

module.exports = fetchNotes