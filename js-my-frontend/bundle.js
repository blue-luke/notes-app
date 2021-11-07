var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// fetchNotes.js
var require_fetchNotes = __commonJS({
  "fetchNotes.js"(exports2, module2) {
    fetchNotes = (onceFetched) => {
      fetch("http://localhost:3000/notes").then((response) => response.json()).then((jsonData) => {
        onceFetched(jsonData);
      });
    };
    module2.exports = fetchNotes;
  }
});

// index.js
var fetchNotes2 = require_fetchNotes();
fetchNotes2((jsonData) => {
  jsonData.forEach((element2) => createElement(element2));
});
createElement = (element2) => {
  newDiv = document.createElement("div");
  newContent = document.createTextNode(`${element2["title"]}: ${element2["content"]}`);
  newDiv.className = "post";
  idNumber = document.querySelectorAll(".post").length + 1;
  newDiv.id = "post-" + idNumber;
  newDiv.appendChild(newContent);
  document.body.appendChild(newDiv);
};
var button = document.querySelector("#submit-note-data");
button.addEventListener("click", () => {
  title = document.querySelector("#note-title").value;
  content = document.querySelector("#note-content").value;
  element = { "title": `${title}`, "content": `${content}` };
  createElement(element);
  updateServer(element);
});
updateServer = (element2) => {
  fetch("http://localhost:3000/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(element2)
  });
};
