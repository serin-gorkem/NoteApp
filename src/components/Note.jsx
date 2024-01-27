import { useState } from "react";
import { PiTrashDuotone } from "react-icons/pi";

export default function Note(props) {
  return (
      <div className="flex h-48 flex-col justify-between rounded-xl bg-red-300 p-4">
      <h3>{props.title}</h3>
      <div className="flex items-center justify-between">
        <time>{props.date} </time>
        <div className="flex w-24 items-center justify-between">
          <button
            className="rounded-xl bg-gray-300 px-6 py-1"
            onClick={() => {
              setNoteState("editing")
              }}
          >
            Edit
          </button>
          <PiTrashDuotone className="cursor-pointer" onClick={() => props.deleteNote(props.id)} />
        </div>
      </div>
    </div>
  );
}
