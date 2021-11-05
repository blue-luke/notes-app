const fetchNotes = require('./fetchNotes.js')

fetchNotes((jsonData) => {
  newDiv = document.createElement("div");
  newContent = document.createTextNode(`${jsonData[0]['title']}`);
  newDiv.className = 'post';
  idNumber = document.querySelectorAll('.post').length + 1
  newDiv.id = 'post-' + idNumber;
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);

})