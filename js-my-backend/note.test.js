const Note = require('./note')

describe('Note', () => {
  it('notes have a title', () => {
    note1 = new Note('Shopping list', 'Get bananas')
    expect(note1.getTitle()).toEqual('Shopping list');
  });
});

describe('Note', () => {
  it('notes have content', () => {
    note1 = new Note('Shopping list', 'Get bananas')
    expect(note1.getContent()).toEqual('Get bananas');
  });
});

// Below test would be very nice to have, don't know how to
// describe('Note', () => {
//   it('returns all notes previously created', () => {
//     note1 = new Note('Shopping list', 'Get bananas')
//     note2 = new Note('Weekend', 'Cook lunch')
//     expect(Note.all()).toEqual('Get bananas');
//   });
// });


