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

const button = document.querySelector('#submit-note-data')

button.addEventListener('click', () => {
  title = document.querySelector('#note-title').value;
  content = document.querySelector('#note-content').value;
  element = { "title": `${title}`, "content": `${content}`};
  createElement(element); 
  updateServer(element);
})

updateServer = (element => {
    fetch('http://localhost:3000/notes', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(element),
  })
  // .then(response => response.json())
  // .then(data => {
  //   console.log('Success:', data);
  // })
  // .catch((error) => {
  //   console.error('Error:', error);
  // });
})
