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
    <div className="flex h-48 w-full flex-col justify-between gap-2 rounded-xl bg-note-light p-4 italic shadow-lg dark:bg-note-dark">
      <textarea
        aria-label="your note text"
        onChange={setNote}
        value={props.text}
        maxLength={200}
        disabled={true}
        className="h-full min-h-6 resize-none bg-transparent text-xl italic focus:outline-none"
      ></textarea>
      <div className="flex items-center justify-between h-16">
        <time>{props.date} </time>
        <div className="flex w-28 items-center justify-between h-full">
          <button
            aria-label="edit-note"
            className="rounded-xl bg-button-light px-6 py-1 dark:bg-button-dark h-full"
            onClick={changeState("typing")}
          >
            Edit
          </button>
          <PiTrashDuotone
            className="cursor-pointer w-16"
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
    <div className="flex h-48 flex-col justify-between rounded-xl gap-2 bg-edit-note-light p-4 shadow-xl dark:bg-edit-note-dark">
      <textarea
        aria-label="your note text"
        placeholder="Type to add a note..."
        onChange={setNote}
        value={noteValue}
        maxLength={200}
        className="h-full min-h-6 resize-none bg-transparent text-xl italic focus:outline-none"
      ></textarea>
      <div className="flex items-center justify-between h-16 ">
        <p>{200 - noteValue.length} remaining </p>
        <div className="flex w-28 items-center justify-between h-full ">
          <button
            aria-label="save-note"
            className="rounded-xl bg-note-light px-6 py-1 dark:bg-button-dark h-full"
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
          <PiX className="cursor-pointer  w-16" onClick={changeState("saved")}></PiX>
        </div>
      </div>
    </div>
  );
}
