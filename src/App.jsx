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
  const [query, setQuery] = useState("");
  // -------------------------------- //
    /* Dark Mode */
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode (){
    setIsDarkMode(!isDarkMode);
  }


  // -------------------------------- //
  /* Note filter */
  function filterItems(notes, query) {
    query = query.toLowerCase();
    return notes.filter((item) => item.title.toLowerCase().includes(query));
  }
  const result = filterItems(notes, query);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  // -------------------------------- //

  // -------------------------------- //
  /* Default Note list */
  let currentDate = new Date();
  let notesList = [];
  if (notes.length > 0) {
    notesList = result.map((note) => {
      return (
        <Note
          key={note.id}
          id={note.id}
          title={note.title}
          date={currentDate.getUTCDate() + "/" + currentDate.getUTCMonth() + 1 + "/" + currentDate.getUTCFullYear()}
          deleteNote={deleteNote}
          saveNote={saveNote}
        />
      );
    });
  } else {
    notesList = [];
  }
  // -------------------------------- //

  // -------------------------------- //
  /* Create, Save and Delete Note */
  function createNewNote(noteValue) {
    const newNote = {
      id: notes.length + 1,
      title: noteValue,
      date: "01/26/2024",
    };
    setNotes([...notes, newNote]);
  }
  function saveNote(noteValue, noteId) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        if (oldNote.id === noteId) {
          return {
            ...oldNote,
            title: noteValue,
            date: "27/01/2024",
          };
        } else {
          return oldNote;
        }
      }),
    );
  }
  function deleteNote(noteId) {
    const newNotes = notes.filter((note) => note.id !== noteId);
    setNotes(newNotes);
  }
  // -------------------------------- //

  // -------------------------------- //
  /* Save notes to local storage */
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  // -------------------------------- //

  return (
    <div className={`${isDarkMode ? "dark bg-dark" : "bg-light"} `}>
      <main className="max-container min-h-screen p-4 dark:text-text-dark text-text-light">
        <section className="flex w-full items-center justify-between py-2">
          <Header toggleDarkMode={toggleDarkMode} />
        </section>
        <section>
          <SearchBar query={query} onChange={handleChange} />
        </section>
        <section className="grid grid-cols-3 gap-2 py-4 max-sm:grid-cols-1 ">
          {notesList}
          <CreateNote createNewNote={createNewNote} />
        </section>
      </main>
    </div>
  );
}
