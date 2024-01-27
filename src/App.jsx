import { useEffect, useState } from "react";
import CreateNote from "./components/CreateNote";
import Note from "./components/Note";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

export default function App() {
  //localStorage.clear();
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [],
  );
  const [noteValue, setNoteValue] = useState("");
  let notesList = [];
  if (notes.length > 0) {
    notesList = notes.map((note) => {
      return (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          date={note.date}
          handleNoteSave={handleNoteSave}
          deleteNote={deleteNote}
          noteValue={noteValue}
          changeNote={changeNote}
        />
      );
    });
  } else {
    notesList = [];
  }
  function changeNote(e) {
    setNoteValue(e.target.value);
  }
  
  function deleteNote(noteId) {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  }
  function handleNoteSave() {
    const newNote = {
      id: notes.length + 1,
      title: noteValue,
      date: "01/26/2024",
    };
    setNotes([...notes, newNote]);
    setNoteValue("");
  }
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
 
  return (
    <div>
      <main className="max-container h-screen p-4">
        <section className="flex w-full items-center justify-between py-2">
          <Header/>
        </section>
        <section>
          <SearchBar />
        </section>
        <section className="grid grid-cols-3 gap-2 py-4 max-sm:grid-cols-2">
          {notesList}
          <CreateNote
            handleNoteSave={handleNoteSave}
            noteValue={noteValue}
            changeNote={changeNote}
          />
        </section>
      </main>
    </div>
  );
}
