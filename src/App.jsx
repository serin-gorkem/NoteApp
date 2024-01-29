import { useEffect, useState,useMemo } from "react";
import CreateNote from "./components/CreateNote";
import CurrentNote from "./components/CurrentNote";
import SearchBar from "./sections/SearchBar";
import Header from "./sections/Header";

export default function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || [],
  );
  const [query, setQuery] = useState("");
  // -------------------------------- //
    /* Dark Mode */
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "light"
  });


  function getThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem("theme");;
    if (savedTheme) {
      setTheme( savedTheme)
    }
  }
  function toggleDarkMode (){
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme",newTheme);
      return newTheme;
    })
  }
  useEffect(() => {
    getThemeFromLocalStorage();
  },[theme])

  // -------------------------------- //
  /* Note filter */

  function filterItems(notes,query){
    query = query.toLowerCase();
    return notes.filter((item) => item.text.toLowerCase().includes(query));
  }

  const filteredNotes = useMemo(() => {
    return filterItems(notes, query) 
  },[notes,query]);

  const result = filteredNotes;

  function updateSearchBar(e) {
    setQuery(e.target.value);
  }

  // -------------------------------- //

  // -------------------------------- //
  /* Default Note list */
  let currentDate = new Date();
  let fullDate = currentDate.getUTCDate() + "/" + currentDate.getUTCMonth() + 1 + "/" + currentDate.getUTCFullYear();

  let notesList = [];
  if (notes.length > 0) {
    notesList = result.map((note) => {
      return (
        <CurrentNote
          key={note.id}
          id={note.id}
          text={note.text}
          date={fullDate}
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
      text: noteValue,
      date: {fullDate},
    };
    setNotes([...notes, newNote]);
  }
  function saveNote(noteValue, noteId) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        if (oldNote.id === noteId) {
          return {
            ...oldNote,
            text: noteValue,
            date: oldNote.date,
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

  /* Save notes to local storage */
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  // -------------------------------- //


  return (
    <div className={`${theme === "dark" ? "dark bg-dark" : "bg-light"} `}>
      <main className="max-container min-h-screen p-4 dark:text-text-dark text-text-light">
        <section className="flex w-full items-center justify-between py-2">
          <Header toggleDarkMode={toggleDarkMode} />
        </section>
        <section>
          <SearchBar query={query} onChange={updateSearchBar} />
        </section>
        <section className="grid grid-cols-3 gap-2 py-4 max-sm:grid-cols-1 ">
          {notesList}
          <CreateNote createNewNote={createNewNote} />
        </section>
      </main>
    </div>
  );
}
