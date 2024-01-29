import { useContext, useState } from "react";
import { PiTrashDuotone, PiX } from "react-icons/pi";
import { NotesDispatchContext } from "./notesContext";

export default function CurrentNote(props) {
  // This component handles the display of the current note. //

  // ----------------------------------------------------------------//
  const dispatch = useContext(NotesDispatchContext);
  const [noteValue, setNoteValue] = useState(props.text ? props.text : "");
  const [noteState, setNoteState] = useState("saved");

  // ----------------------------------------------------------------//
  function setNote(e) {
    setNoteValue(e.target.value);
  }

  // ----------------------------------------------------------------//
  const changeState = (v) => {
    return () => setNoteState(v);
  };

  // ----------------------------------------------------------------//
  return noteState === "saved" ? (
    // Saved note
    <div className="flex h-48 w-full flex-col justify-between rounded-xl bg-note-light p-4 italic shadow-lg dark:bg-note-dark">
      <textarea
        onChange={setNote}
        value={props.text}
        maxLength={200}
        disabled={true}
        className="h-full min-h-6 resize-none bg-transparent text-xl italic focus:outline-none"
      ></textarea>
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
            onClick={() =>
              dispatch({
                type: "delete_note",
                id: props.id,
              })
            }
          />
        </div>
      </div>
    </div>
  ) : (
    // Edit note
    <div className="flex h-48 flex-col justify-between rounded-xl bg-edit-note-light p-4 shadow-xl dark:bg-edit-note-dark">
      <textarea
        placeholder="Type to add a note..."
        onChange={setNote}
        value={noteValue}
        maxLength={200}
        className="h-full min-h-6 resize-none bg-transparent text-xl italic focus:outline-none"
      ></textarea>
      <div className="flex items-center justify-between">
        <h3>{200 - noteValue.length} remaining </h3>
        <div className="flex w-24 items-center justify-between">
          <button
            className="rounded-xl bg-note-light px-6 py-1 dark:bg-button-dark"
            onClick={() => {
              dispatch({
                type: "edit_note",
                id: props.id,
                text: noteValue,
              });
              setNoteState("saved");
            }}
          >
            Save
          </button>
          <PiX className="cursor-pointer" onClick={changeState("saved")}></PiX>
        </div>
      </div>
    </div>
  );
}
