export const initialNotes = JSON.parse(localStorage.getItem("notes")) || [];


export function notesReducer(notes, action) {
  switch (action.type) {
    case "create_note":
      const newNote = {
        id: notes.length + 1,
        text: action.text,
        date: action.date,
      };
      return [...notes, newNote];

    case "edit_note":
      return notes.map((newNote) => {
        if (newNote.id === action.id) {
          return {
            ...newNote,
            text: action.text,
            date: newNote.date,
          };
        } else {
          return newNote;
        }
      });

    case "delete_note":
      const newNotes = notes.filter((note) => note.id !== action.id);
      return newNotes;

    // case "filter_notes":


    default:
      throw Error("Unknown action: " + action.type);
  }
}

