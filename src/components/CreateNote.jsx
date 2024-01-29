import { useState } from "react";

export default function CreateNote(props) {
  const [noteValue, setNoteValue] = useState("");
  function updateNote(e) {
    setNoteValue(e.target.value);
  }
  return (
    <div className="flex h-48 flex-col justify-between rounded-xl bg-edit-note-light p-4 shadow-xl dark:bg-edit-note-dark">
      <textarea
        placeholder="Type to add a note..."
        onChange={updateNote}
        value={noteValue}
        maxLength={200}
        className="h-full min-h-6 resize-none bg-transparent placeholder:text-gray-600 focus:outline-none"
      ></textarea>
      <div className="flex items-center justify-between">
        <h3>{200 - noteValue.length} remaining </h3>
        <button
          className="rounded-xl bg-note-light px-6 py-1 dark:bg-button-dark"
          onClick={() => {
            props.createNewNote(noteValue);
            setNoteValue("");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
