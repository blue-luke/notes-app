const AllNotes = require('./allnotes')

// allnotes = new AllNotes()

class Note {

  constructor(title, content) {
    this.title = title
    this.content = content
    allnotes.getAll().push(this)
  }
  getTitle() {
    return this.title
  }
  getContent() {
    return this.content
  }
}


module.exports = Note

// Not sure how to create a class variable to store 
// all created notes, so this is done with 
// a new class and instance altogether, AllNotes