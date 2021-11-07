const fetchNotes = require('./fetchNotes.js')

fetchNotes((jsonData) => {
  jsonData.forEach(element =>
    createElement(element)
  )
})

createElement = (element) => {
  newDiv = document.createElement("div");
  // newContent.maxLength = "20"
  newContent = document.createTextNode(`${element['title']}: ${element['content']}`);
  newDiv.className = 'post';
  idNumber = document.querySelectorAll('.post').length + 1
  newDiv.id = 'post-' + idNumber;
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
}
