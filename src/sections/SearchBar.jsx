import { PiMagnifyingGlass } from "react-icons/pi";

export default function SearchBar(props) {
  // This component handles the display of the search bar. //
  return (
    <div className="flex w-full items-center justify-center rounded-xl bg-search-bar-light p-3 text-text-light shadow-lg dark:bg-search-bar-dark dark:text-text-dark">
      <PiMagnifyingGlass className="cursor-pointer" />
      <input
        aria-label="search input"
        placeholder="Type to search..."
        value={props.query}
        onChange={props.onChange}
        className="w-full bg-search-bar-light px-4 italic focus:outline-none dark:bg-search-bar-dark"
      ></input>
    </div>
  );
}
