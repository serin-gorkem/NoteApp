import { useContext, useState } from "react";
import { NotesDispatchContext } from "./notesContext";

export default function CreateNote() {
  // This component handles the creation of notes.//

  //----------------------------------------------------------------//
  const [noteValue, setNoteValue] = useState("");
  const dispatch = useContext(NotesDispatchContext);

  //----------------------------------------------------------------//
  let currentDate = new Date();
  let fullDate =
    currentDate.getUTCDate() +
    "/" +
    currentDate.getUTCMonth() +
    1 +
    "/" +
    currentDate.getUTCFullYear();

  //----------------------------------------------------------------//
  function updateNote(e) {
    setNoteValue(e.target.value);
  }

  //----------------------------------------------------------------//
  return (
    <div className="flex h-48 flex-col justify-between gap-2 rounded-xl bg-edit-note-light p-4 shadow-xl dark:bg-edit-note-dark">
      <textarea
        aria-label="your note text"
        placeholder="Type to add a note..."
        onChange={updateNote}
        value={noteValue}
        maxLength={200}
        className="h-full min-h-6 resize-none bg-transparent text-lg italic placeholder:text-gray-600 focus:outline-none "
      ></textarea>
      <div className="flex items-center justify-between h-16">
        <p>{200 - noteValue.length} remaining </p>
        <button
          aria-label="create-note-button"
          className="rounded-xl bg-note-light px-6 py-1 dark:bg-button-dark h-full"
          onClick={() => {
            dispatch({
              type: "create_note",
              text: noteValue,
              date: fullDate,
            });
            setNoteValue("");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
