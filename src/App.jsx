/**
 *
 * Görkem Serin 01/29/2024
 * Free to use however you like
 *
 */
import { useEffect, useState, useReducer } from "react";
import {
  initialNotes,
  notesReducer,
  NotesContext,
  NotesDispatchContext,
} from "./components/notesContext";
import CreateNote from "./components/CreateNote";
import SearchBar from "./sections/SearchBar";
import Header from "./sections/Header";
import FilteredNotes from "./components/FilteredNotes";
export default function App() {
  //Handles notes reducer, query state for search bar, theme state for theme change and displays the components.//

  //----------------------------------------------------------------//
  /* States & Reducers */
  const [notes, dispatch] = useReducer(notesReducer, initialNotes);
  const [query, setQuery] = useState("");
  const [theme, setTheme] = useState(() => {
    const initialTheme = localStorage.getItem("theme");
    return initialTheme ? initialTheme : "light";
  });
  //----------------------------------------------------------------//

  //----------------------------------------------------------------//
  /* Local Storage */
  useEffect(() => {
    getNotesFromLocalStorage();
  }, [notes]);

  useEffect(() => {
    getThemeFromLocalStorage();
  }, [theme]);

  function getNotesFromLocalStorage() {
    localStorage.setItem("notes", JSON.stringify(notes));
  }
  function getThemeFromLocalStorage() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }
  //----------------------------------------------------------------//

  //----------------------------------------------------------------//
  /* Event Handlers */
  function toggleDarkMode() {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  }

  function updateSearchBar(e) {
    setQuery(e.target.value);
  }
  //----------------------------------------------------------------//
  return (
    <div
      className={`${theme === "dark" ? "dark bg-dark" : "bg-light"} font-dancing-script `}
    >
      <main className="max-container min-h-screen p-4 text-text-light dark:text-text-dark">
        <section className="flex w-full items-center justify-between py-2">
          <Header toggleDarkMode={toggleDarkMode} />
        </section>
        <section>
          <SearchBar query={query} onChange={updateSearchBar} />
        </section>
        <section className="grid grid-cols-3 gap-2 py-4 max-sm:grid-cols-1 ">
          <NotesDispatchContext.Provider value={dispatch}>
            <NotesContext.Provider value={notes}>
              <FilteredNotes query={query} />
            </NotesContext.Provider>
            <CreateNote />
          </NotesDispatchContext.Provider>
        </section>
      </main>
    </div>
  );
}
