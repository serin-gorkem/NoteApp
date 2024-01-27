import { useState } from "react";
import { PiTrashDuotone } from "react-icons/pi";

export default function Note(props) {
  const [noteValue, setNoteValue] = useState(props.title ? props.title : "");
  const [noteState, setNoteState] = useState("saved");
  function setNote(e){
    setNoteValue(e.target.value);
  }
  return noteState === "saved" ? (
    // Saved note
    <div className="flex h-48 flex-col justify-between rounded-xl dark:bg-note-dark bg-note-light p-4 shadow-lg">
      <h3>{props.title}</h3>
      <div className="flex items-center justify-between">
        <time>{props.date} </time>
        <div className="flex w-24 items-center justify-between">
          <button
            className="rounded-xl dark:bg-button-dark bg-button-light px-6 py-1"
            onClick={() => setNoteState("typing")}
          >
            Edit
          </button>
          <PiTrashDuotone
            className="cursor-pointer"
            onClick={() => props.deleteNote(props.id)}
          />
        </div>
      </div>
    </div>
  ) : (
    // Edit note
    <div className="flex h-48 flex-col justify-between rounded-xl dark:bg-note-dark bg-note-light p-4">
      <textarea
        placeholder="Type to add a note..."
        onChange={setNote}
        value={ noteValue}
        maxLength={200}
        className="h-full min-h-6 bg-transparent focus:outline-none"
      ></textarea>
      <div className="flex items-center justify-between">
        <h3>{200 - noteValue.length} remaining </h3>
        <button
          className="rounded-xl dark:bg-edit-note-dark bg-light px-6 py-1"
          onClick={() => 
          {
            props.saveNote(noteValue,props.id);
            setNoteState("saved")
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
