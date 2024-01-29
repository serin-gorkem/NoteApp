import { useState } from "react";
import { PiTrashDuotone, PiX } from "react-icons/pi";

export default function Note(props) {
  const [noteValue, setNoteValue] = useState(props.text ? props.text : "");
  const [noteState, setNoteState] = useState("saved");
  function setNote(e) {
    setNoteValue(e.target.value);
  }
  const changeState = (v) => {
    return () => setNoteState(v)
  }

  return noteState === "saved" ? (
    // Saved note
    <div className="flex h-48 flex-col justify-between rounded-xl bg-note-light p-4 shadow-lg dark:bg-note-dark">
      <h3>{props.text}</h3>
      <div className="flex items-center justify-between">
        <time>{props.date} </time>
        <div className="flex w-24 items-center justify-between">
          <button
            className="rounded-xl bg-button-light px-6 py-1 dark:bg-button-dark"
            onClick={changeState("typing")}
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
    <div className="flex h-48 flex-col justify-between rounded-xl bg-edit-note-light p-4 dark:bg-edit-note-dark">
      <textarea
        placeholder="Type to add a note..."
        onChange={setNote}
        value={noteValue}
        maxLength={200}
        className="h-full min-h-6 resize-none bg-transparent focus:outline-none"
      ></textarea>
      <div className="flex items-center justify-between">
        <h3>{200 - noteValue.length} remaining </h3>
        <div className="flex w-24 items-center justify-between">
          <button
            className="rounded-xl bg-note-light px-6 py-1 dark:bg-button-dark"
            onClick={() => {
              props.saveNote(noteValue, props.id);
              setNoteState("saved")
            }}
          >
            Save
          </button>
          <PiX
            className="cursor-pointer"
            onClick={changeState("saved")}
          ></PiX>
        </div>
      </div>
    </div>
  );
}
