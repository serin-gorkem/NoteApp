import { useContext, useMemo } from "react";
import CurrentNote from "./CurrentNote";
import { NotesContext } from "./notesContext";

export default function FilteredNotes({ query }) {
  const notes = useContext(NotesContext);
  const filteredNotes = useMemo(() => {
    return filterItems(notes, query);
  }, [notes, query]);

  function filterItems(notes, query) {
    query = query.toLowerCase();
    return notes.filter((item) => item.text.toLowerCase().includes(query));
  }

  const result = filteredNotes;
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

  return notesList;
}