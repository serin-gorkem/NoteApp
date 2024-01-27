import { useState } from "react";

export default function CreateNote(props) {
  const [noteValue, setNoteValue] = useState("");
  function updateNote(e) {
    setNoteValue(e.target.value);
  }
  return (
    <div className="flex h-48 flex-col justify-between rounded-xl dark:bg-edit-note-dark bg-edit-note-light p-4 shadow-xl">
      <textarea
        placeholder="Type to add a note..."
        onChange={updateNote}
        value={noteValue}
        maxLength={200}
        className="h-full min-h-6 bg-transparent focus:outline-none placeholder:text-gray-600"
      ></textarea>
      <div className="flex items-center justify-between">
        <h3>{200 - noteValue.length} remaining </h3>
        <button
          className="rounded-xl dark:bg-button-dark bg-note-light px-6 py-1"
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
