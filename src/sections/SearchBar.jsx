import { PiMagnifyingGlass } from "react-icons/pi";

export default function SearchBar(props){
    return (
        <div className="flex w-full items-center justify-center rounded-xl dark:bg-search-bar-dark bg-search-bar-light p-3 shadow-lg dark:text-text-dark text-text-light">
        <PiMagnifyingGlass className="cursor-pointer" />
        <input
          placeholder="Type to search..."
          value={props.query}
          onChange={props.onChange}
          className="w-full px-4 focus:outline-none dark:bg-search-bar-dark bg-search-bar-light italic"
        ></input>
      </div>
    )
}