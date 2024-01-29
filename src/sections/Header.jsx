import { PiMoonBold } from "react-icons/pi";

export default function Header(props) {
  // This component handles the display of the header. //
  return (
    <>
      <h1 className="text-[2rem] font-bold text-black dark:text-white">
        Notes
      </h1>
      <button
        name="theme-toggle"
        className="rounded-lg bg-button-light px-3 py-1 text-text-light shadow-lg dark:bg-button-dark dark:text-text-dark max-sm:hover:shadow-none "
        onClick={props.toggleDarkMode}
      >
        <PiMoonBold />
      </button>
    </>
  );
}
