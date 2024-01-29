import { useContext, useMemo } from "react";
import CurrentNote from "./CurrentNote";
import { NotesContext } from "./notesContext";

export default function FilteredNotes({ query }) {
  // This component filters the notes using the query state. Query state comes from the SearchBar via App.js //

  //----------------------------------------------------------------//
  const notes = useContext(NotesContext);

  //----------------------------------------------------------------//
  const filteredNotes = useMemo(() => {
    return filterItems(notes, query);
  }, [notes, query]);

  function filterItems(notes, query) {
    query = query.toLowerCase();
    return notes.filter((item) => item.text.toLowerCase().includes(query));
  }

  const result = filteredNotes;

  //----------------------------------------------------------------//

  //----------------------------------------------------------------//
  // Creates a CurrentNote component from a list of notes
  let notesList = [];
  if (notes.length > 0) {
    notesList = result.map((note) => {
      return (
        <CurrentNote
          key={note.id}
          id={note.id}
          text={note.text}
          date={note.date}
        />
      );
    });
  } else {
    notesList = [];
  }
  // Used on App.js return.
  return notesList;

  //----------------------------------------------------------------//
}
