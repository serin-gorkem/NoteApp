import { useState } from "react";

export default function CreateNote(props) {
  return (
    <div className="flex h-48 flex-col justify-between rounded-xl bg-red-300 p-4">
      <textarea
        placeholder="Type to add a note..."
        onChange={props.changeNote}
        value={props.noteValue}
        maxLength={200}
        className="h-full min-h-6 bg-transparent focus:outline-none"
      ></textarea>
      <div className="flex items-center justify-between">
        <h3>{200 - props.noteValue.length} remaining </h3>
        <button
          className="rounded-xl bg-gray-300 px-6 py-1"
          onClick={props.handleNoteSave}
        >
          Save
        </button>
      </div>
    </div>
  );
}
