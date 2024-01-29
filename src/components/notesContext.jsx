import { createContext} from "react";
export const initialNotes = JSON.parse(localStorage.getItem("notes")) || [];

export const NotesContext = createContext(null);
export const NotesDispatchContext = createContext(null);

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

    default:
      throw Error("Unknown action: " + action.type);
  }
}
