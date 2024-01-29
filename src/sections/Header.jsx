import { PiMoonBold } from "react-icons/pi";

export default function Header(props) {
  return (
    <>
      <h1 className="text-[2rem] font-bold text-black dark:text-white">Notes</h1>
      <button className="rounded-lg dark:bg-button-dark bg-note-light px-3 py-1 dark:text-text-dark text-text-light hover:shadow-lg"
      onClick={props.toggleDarkMode}>
        <PiMoonBold/>
      </button>
    </>
  );
}
